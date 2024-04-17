import mido
import serial
import time

# Open the MIDI file
midi_file = mido.MidiFile('song-maker.mid')
note = []

arduino = serial.Serial(port='COM6', baudrate=115200, timeout=0.1)

def write_read(x):
    arduino.write(bytes(x, 'utf-8'))
    time.sleep(0.1)
    data = arduino.readline()
    print(data)

write_read("flushing")
write_read("flushing")
write_read("flushing")

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
            #print(f"{global_time}: motor {note.index(msg.note)} - {msg.velocity} - {msg.time}")
            write_read(f"{note.index(msg.note)}:{msg.velocity}\n")
    if msg.type == 'note_off':
        if msg.note in note:
            #print(f"{global_time}: motor {note.index(msg.note)} UP")
            write_read(f"{note.index(msg.note)}:-1\n")
# Handle other MIDI events as needed
