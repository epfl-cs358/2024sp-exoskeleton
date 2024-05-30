import threading

queue_lock = threading.Lock()
queue = []

end_thread_lock = threading.Lock()
end_thread = False

db_lock = threading.Lock()
stop_recording = False
recording_lock = threading.Lock()

is_playing = False
is_playing_lock = threading.Lock()
stop_playing = False
stop_playing_lock = threading.Lock()

def registerNewTask(task):
    global queue
    with queue_lock:
        queue.append(task)

def popLastTask():
    task = None
    global queue
    with queue_lock : 
        if len(queue) > 0:
            task = queue.pop()
    return task

def isProgramFinished():
    with end_thread_lock :
        return end_thread

def setProgramFinished():
    with end_thread_lock :
        global end_thread
        end_thread = True

def stopRecording():
    with recording_lock:
        global stop_recording
        stop_recording = True

def isRecordingFinished():
    with recording_lock:
        return stop_recording