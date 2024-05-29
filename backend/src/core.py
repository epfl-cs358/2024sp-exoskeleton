import shared_data 
import actions 
import threading
import time

def consummer():
    while True:
        task = shared_data.popLastTask()
        if task != None : 
            print("new task : ", task)
            if task == "LIST_FILES" :
                actions.listRecordings()
            elif task == "GET_PORTS":
                actions.availablePorts()
        if shared_data.isProgramFinished():
            break
        time.sleep(1)   

consummer_thread = threading.Thread(target=consummer)