import threading

queue_lock = threading.Lock()
queue = []

end_thread_lock = threading.Lock()
end_thread = False

db_lock = threading.Lock()

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