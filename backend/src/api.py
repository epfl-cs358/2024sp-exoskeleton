"""
Flask endpoints to serve the glove functionnalities and
Flask Websocket for bidirectionnal communication with the Client

to have an app that is both event and notification driven
"""
import shared_data 
import actions

from flask import *
import json

app = Flask(__name__)

@app.route("/")
def home():
    return "[+] the api is running..."

@app.route("/append_to_queue/<message>")
def append_queue(message):
    newTask = actions.Action(actions.ACTION_PLAY_RECORD_BY_ID)
    shared_data.registerNewTask(newTask)
    return "[+] append to queue successful"

@app.route("/is_glove_connected")
def is_the_glove_connected():
    return "[+] is glove connected"

@app.route("/start_recording")
def get_video():
    return "[+] start recording..."

@app.route("/stop_recording")
def stop_recording():
    return "[+] stop recording..."

@app.route("/play")
def play():
    return "[+] play..."

@app.route("/get_midi_data")
def get_midi_data():
    return "[+] get midi data"

@app.route("/get_processed_video")
def get_processed_video():
    return "[+] get processed video..."