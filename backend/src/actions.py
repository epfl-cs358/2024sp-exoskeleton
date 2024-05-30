import os
from datetime import datetime 
import string 
import random 
import shared_data
import json 
import threading
import midi_interpreter
import midi_recorder 

RECORDING_PATH = "./src/recordings/"
RECORDING_DB_NAME = "recordings.json"
ID_ALPHABET = string.ascii_lowercase + string.ascii_uppercase + string.digits
ID_LENGTH = 32

"""
Action class
"""
ACTION_PLAY_RECORD_BY_ID = "playById"
ACTION_START_RECORD = "startRecord"
ACTION_STOP_RECORD = "stopRecord"

class Action :
    def __init__(self, type: str, additionalData: list = []):
        self.type = type
        self.additionalData = additionalData

    def getAdditionalData(self): 
        return self.additionalData
    
    def getActionType(self):
        return self.type

"""
Recorded Files 
"""
def generateNewRandomFileId()->str:
    file_id = "".join([ID_ALPHABET[int(random.random()*len(ID_ALPHABET))] for i in range(0, ID_LENGTH)])
    return file_id

def isValidFormatId(file_id: str):
    correct = True
    if len(file_id) != ID_LENGTH:
        correct = False 
    else :
        for char in file_id : 
            if char not in ID_ALPHABET:
                correct = False
                break
    return correct 

def listRecordings():
    recordings = os.listdir(RECORDING_PATH)
    recordings.remove("ReadMe.md")
    recordings.remove(RECORDING_DB_NAME)
    return recordings

def getRecordingsMetaData():
    jsonRaw = "[]"
    with shared_data.db_lock:
        with open(RECORDING_PATH + RECORDING_DB_NAME, 'r') as db_file:
            jsonRaw = db_file.read()
    return json.loads(jsonRaw)

def rename(id: str, name: str):
    if not isValidFormatId(id):
        return False
    if id not in listRecordings():
        return False
    
    with shared_data.db_lock:
        jsonData = "[]"
        with open(RECORDING_PATH + RECORDING_DB_NAME, 'r') as db_file:
            jsonRaw = db_file.read()
            jsonData = json.loads(jsonRaw)
            for elem in jsonData : 
                if elem["id"] == id :
                    elem["filename"] = name
        with open(RECORDING_PATH + RECORDING_DB_NAME, 'w') as db_file:
            db_file.write(json.dumps(jsonData))
    return True

def remove(id: str):
    if not isValidFormatId(id):
        return False
    if id not in listRecordings():
        return False
    
    with shared_data.db_lock:
        os.remove(RECORDING_PATH+id)
        with open(RECORDING_PATH + RECORDING_DB_NAME, 'r') as db_file:
            jsonRaw = db_file.read()
            jsonData = json.loads(jsonRaw)
            matchingElemId = -1
            for i in range(0, len(jsonData)) : 
                if jsonData[i]["id"] == id :
                    matchingElemId = i
                    break
            if matchingElemId >= 0:
                jsonData.pop(i)
        with open(RECORDING_PATH + RECORDING_DB_NAME, 'w') as db_file:
            db_file.write(json.dumps(jsonData))

    return True

def addNewUnamedRecording(id: str):
    recordingTime = datetime.now()
    formattedTime = recordingTime.strftime("%Y-%m-%d %H:%M:%S")

    if not isValidFormatId(id):
        return False
    
    with shared_data.db_lock:
        with open(RECORDING_PATH + RECORDING_DB_NAME, 'r') as db_file:
            jsonRaw = db_file.read()
            jsonData = json.loads(jsonRaw)
            newData = {'id':id, 'filename':'unammed recording', 'recording_date':formattedTime}
            jsonData.append(newData)
        with open(RECORDING_PATH + RECORDING_DB_NAME, 'w') as db_file:
            db_file.write(json.dumps(jsonData))

    return True

"""
Record 
"""
def startRecording(midi_port):
    obj = midi_recorder.MidiRecorder(midi_port)
    return threading.Thread(target=obj.start_recording)

"""
Play 
"""
def playById(id: str, glove_port):
    if not isValidFormatId(id):
        print("[-] not a valid id")
        return None
    if id not in listRecordings():
        print("[-] not a valid filename")
        return None
    
    print("playing")
    obj = midi_interpreter.MidiInterpreter(port=glove_port)
    obj.reset_motor()
    obj.set_filename(RECORDING_PATH+id)
    obj.play()
    print("end playing")

"""
Setup 
"""
import serial
import serial.tools.list_ports
import mido

ARDUINO_SIGNATURE = 'USB Serial'
def find_arduino():
    ports = serial.tools.list_ports.comports()
    arduino_port = None
    for port in ports:
        if  ARDUINO_SIGNATURE in port.description:
            arduino_port = port.device
            break
    return arduino_port

def list_midi_ports():
    input_ports = mido.get_input_names()
    return input_ports