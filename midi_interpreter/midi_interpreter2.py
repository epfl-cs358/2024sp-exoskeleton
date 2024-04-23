import mido
import serial
import time

# Open the MIDI file
midi_file = mido.MidiFile('example.mid')
note = []

max_speed = 1915
reverse_speed = 1080
min_speed = 1536
max_velocity = 127

rotation_time = 1100
angle_factor = 30/360.0

arduino = serial.Serial(port='COM6', baudrate=115200, timeout=0.1)

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
            #print(f"{global_time}: motor {note.index(msg.note)} - {msg.velocity} - {msg.time}")
            diff = max_speed - min_speed
            factor = msg.velocity / max_velocity
            speed = min_speed + int(diff * factor)
            speed_factor = (speed - min_speed) / diff
            # calculate rotation_delay in milliseconds as the time it takes to turn angle degree at speed speed
            rotation_delay = rotation_time * angle_factor / speed_factor
            print(f"d {note.index(msg.note)} {speed} {rotation_delay}\n")
            write_read(f"m {note.index(msg.note)} {speed} {rotation_delay}\n")
    if msg.type == 'note_off':
        if msg.note in note:
            #print(f"{global_time}: motor {note.index(msg.note)} UP")
            write_read(f"m {note.index(msg.note)} 1080 {rotation_time * angle_factor}\n")
# Handle other MIDI events as needed
