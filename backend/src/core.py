import shared_data 
import actions 
import threading
import time

def consummer():
    recordingThread = None
    isRecording = False
    playingThread = None
    isRunning = False
    while True:
        task = shared_data.popLastTask()
        if task != None : 
            action = task.getActionType()

            if action == actions.ACTION_START_RECORD and not isRecording :
                shared_data.stop_recording = False
                midi_devices = actions.list_midi_ports()
                if len(midi_devices) > 0:
                    midi_device = midi_devices[0]
                    shared_data.stop_recording = False
                    recordingThread = actions.startRecording(midi_device)
                    if recordingThread != None :
                        recordingThread.start()
                        isRecording = True
                        print("[+] recording thread started")
                    else :
                        print("[+] failed to start the recording thread")
  

            elif action == actions.ACTION_STOP_RECORD and isRecording :
                shared_data.stopRecording()
                recordingThread.join()
                isRecording = False
                print("[+] stop recording")

            elif action == actions.ACTION_PLAY_RECORD_BY_ID :
                glove_port = actions.find_arduino()
                if glove_port != None :
                    id = task.getAdditionalData()[0]
                    actions.playById(id, glove_port)

        if shared_data.isProgramFinished():
            break
        time.sleep(1)   

consummer_thread = threading.Thread(target=consummer)