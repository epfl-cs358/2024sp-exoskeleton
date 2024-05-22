import mido
import serial
import time


class MidiInterpreter:

    def __init__(self, port='COM6', initial_filename=None):
        self.arduino = serial.Serial(port=port, baudrate=115200, timeout=0.1)
        self.midi_file = mido.MidiFile("song-maker.mid")
        if initial_filename is not None:
            self.midi_file.filename = initial_filename
        # fix for fast music, can adjust
        self.midi_file.ticks_per_beat = self.midi_file.ticks_per_beat / 2
        self.note = []

        self.write_read("flushing")
        self.write_read("flushing")
        self.write_read("flushing")

    def write_read(self, x):
        self.arduino.write(bytes(x, 'utf-8'))
        time.sleep(0.05)
        data = self.arduino.readline()
        print(data.decode().rstrip())

    def preprocess(self, number_of_finger=4):
        # Process MIDI events
        # Pass a 0 argument lambda to now
        for msg in self.midi_file:
            if msg.type == 'note_on':
                if len(self.note) == 0:
                    self.note.append(msg.note)
                note_number = msg.note
                if self.note.count(note_number) == 0 and abs(note_number - self.note[0]) < 7:
                    self.note.append(note_number)
                # break if len(note) is greater than 5
                if len(self.note) == number_of_finger:
                    break

    def interpret(self):
        for msg in self.midi_file.play():
            if msg.type == 'note_on':
                if msg.note in self.note:
                    print(f"d {self.note.index(msg.note)} d\n")
                    self.write_read(f"m {self.note.index(msg.note)} d\n")
            if msg.type == 'note_off':
                if msg.note in self.note:
                    self.write_read(f"m {self.note.index(msg.note)} u\n")

    def play(self, number_of_finger=4, filename=None, useNote=False):
        if filename is not None:
            self.set_filename(filename)
        if useNote:
            self.preprocess(number_of_finger)
        self.interpret()
        self.reset_motor()

    def reset_motor(self):
        self.write_read(f"m 0 u\n")
        self.write_read(f"m 1 u\n")
        self.write_read(f"m 2 u\n")
        self.write_read(f"m 3 u\n")
        self.write_read(f"m 4 u\n")

    def get_filename(self):
        return self.midi_file.filename

    def set_filename(self, filename):
        self.midi_file.filename = filename

    """ 
        note is an array of keys [78, 79, 80, 84, 89] in increasing number (not necessary but each index translate to a finger)
    """
    def set_note(self, note=None):
        if note is None:
            note = []
        self.note = note


obj = MidiInterpreter(port='COM5')
obj.play()
