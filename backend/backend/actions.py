import os
import string 

ID_ALPHABET = string.ascii_lowercase + string.ascii_uppercase + string.digits
ID_LENGTH = 32

def generateNewRandomFileId()->str:
    file_id = "".join([ID_ALPHABET for i in range(0, ID_LENGTH)])
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
    recordings = os.listdir("./backend/recordings")
    recordings.remove("ReadMe.md")
    return recordings

def record():
    ...

def stop_recording(id: str):
    ...

def play_recording(id: str):
    print()