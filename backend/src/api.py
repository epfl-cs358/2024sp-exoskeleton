import shared_data 
import actions

from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "[+] the api is running..."

@app.route("/start_recording/")
def get_video():
    newTask = actions.Action(actions.ACTION_START_RECORD)
    shared_data.registerNewTask(newTask)
    return "[+] start recording"

@app.route("/stop_recording/")
def stop_recording():
    newTask = actions.Action(actions.ACTION_STOP_RECORD)
    shared_data.registerNewTask(newTask)
    return "[+] stop recording"

@app.route("/get_recording_list/")
def get_recordings():
    return json.dumps(actions.getRecordingsMetaData())

@app.route("/play/<song_id>")
def play(song_id):
    if song_id :
        newTask = actions.Action(actions.ACTION_PLAY_RECORD_BY_ID, [song_id])
        shared_data.registerNewTask(newTask)
        return "[+] start playing a recording"
    else :
        return "[-] no recording specified"