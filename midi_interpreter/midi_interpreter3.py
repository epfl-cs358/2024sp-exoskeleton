import mido
import serial
import time

# Open the MIDI file
midi_file = mido.MidiFile('song-maker.mid')
midi_file.ticks_per_beat = midi_file.ticks_per_beat/2
note = []

arduino = serial.Serial(port='COM5', baudrate=115200, timeout=0.1)

def write_read(x):
    arduino.write(bytes(x, 'utf-8'))
    time.sleep(0.05)
    data = arduino.readline()
    print(data.decode().rstrip())

write_read("flushing")
write_read("flushing")
write_read("flushing")


start_time = time.time()
# Process MIDI events
# Pass a 0 argument lambda to now
for msg in midi_file:
    if msg.type == 'note_on':
        if len(note) == 0:
            note.append(msg.note)
        note_number = msg.note
        if note.count(note_number) == 0 and abs(note_number - note[0]) < 7:
            note.append(note_number)
        # break if len(note) is greater than 5
        if len(note) == 5:
            break

global_time = 0

for msg in midi_file.play():
    global_time += msg.time
    if msg.type == 'note_on':
        if msg.note in note:
            print(f"d {note.index(msg.note)} d\n")
            write_read(f"m {note.index(msg.note)} d\n")
    if msg.type == 'note_off':
        if msg.note in note:
            write_read(f"m {note.index(msg.note)} u\n")

write_read(f"m 0 u\n")
write_read(f"m 1 u\n")
write_read(f"m 2 u\n")
write_read(f"m 3 u\n")
write_read(f"m 4 u\n")
