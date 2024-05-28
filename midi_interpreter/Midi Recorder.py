import time
import rtmidi
import mido

class MidiRecorder(object):
    def __init__(self):
        self.__midiin = rtmidi.MidiIn()
        self.__midiout = rtmidi.MidiOut()
        self.__ports = self.__midiin.get_ports()
        self.__ports_out = self.__midiout.get_ports()
        self.port = -1
        self.device_id = 144
        self.first = False
        self.recording = False
        self.tempo = 120
        self.debug = True
        self.__mid = mido.MidiFile()
        self.__track = mido.MidiTrack()
        self.__activesense = 0

    def get_ports(self):
        return self.__ports

    def set_port(self, port):
        self.__ports = port

    def open_port(self, pnum=None):
        if pnum is None:
            self.__midiin.open_port(self.port)
            self.__midiin.ignore_types(True, True, False)
        if self.__ports:
            self.__midiin.open_port(pnum)
            self.__midiin.ignore_types(True, True, False)
            self.port = pnum
        else:
            raise Exception("No midi port found")

    def close_port(self):
        self.__midiin.close_port()

    def get_message(self):
        return self.__midiin.get_message()

    def send_message(self, message):
        return self.__midiout.send_message(message)

    def set_callback(self, cb):
        self.__midiin.set_callback(cb)

    def end(self):
        self.close_port()
        del self.__midiin

    def start_recording(self):
        self.recording = True

    def stop_recording(self):
        self.recording = False

    def save_track(self, name):
        self.__mid.save('Recordings/' + name + '.mid')

    def process_message(self, event, data=None):
        if not self.recording:
            self.__midiin.cancel_callback()
            return
        message, deltatime = event
        if not self.first:
            self.first = True
            deltatime = 0
        self.__activesense += deltatime
        if message[0] != 254:
            miditime = int(round(mido.second2tick(self.__activesense, self.__mid.ticks_per_beat, mido.bpm2tempo(self.tempo))))
            if self.debug:
                print('deltatime: ', deltatime, 'msg: ', message, 'activecomp: ', self.__activesense)
            else:
                if message[0] == 144: print(message[1])
            if message[0] == self.device_id:
                self.__track.append(mido.Message('note_on', note=message[1], velocity=message[2], time=miditime))
                self.__activesense = 0
            elif message[0] == 176:
                self.__track.append(mido.Message('control_change', channel=1, control=message[1], value=message[2], time=miditime))
            else:
                self.__track.append(mido.Message('note_off', note=message[1], velocity=message[2], time=miditime))
                self.__activesense = 0
