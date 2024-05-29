import shared_data
import api
import core

if __name__ == "__main__":
    core.consummer_thread.start()       ## start the consummer thread 
    api.app.run(port=8080, debug=True)  ## start the webserver
    print("[+] web app finished")
    shared_data.setProgramFinished()    
    core.consummer_thread.join()
    print("[+] thread finished")