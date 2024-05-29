//File Currently Not Used
import  {IMidiFile, noteEvent} from "../Utils/TypesForMidi";

import getConstantDataFromMidiFile from "./getConstantDataFromMidiFile";
import ConvertToNoteEventsJSON from './getNoteEventsJSON';

const PlayMidiAsync = async (fileData:Object,onEvent:Function) =>{
    const File = fileData as IMidiFile;
    const noteEventsJSON = ConvertToNoteEventsJSON(File,500000,getConstantDataFromMidiFile(File));
    const PlayFromNotesAsync = async () =>{
        let timer = 0, currentIndex = 0;
        let Events:Array<noteEvent> = [];
        const timeStamps = 20;
        const interval = setInterval(()=>{
            timer += timeStamps;
            while(true){
                try{
                if(noteEventsJSON[currentIndex].Delta / 1000 <= timer){
                    Events.push(noteEventsJSON[currentIndex]);
                    currentIndex+=1
                }else{
                    onEvent(Events);
                    Events = [];
                    break;
                }
                }catch{
                    clearInterval(interval);
                    onEvent(Events);
                    break;
                }
            }
        },timeStamps);
    }
    PlayFromNotesAsync();
}

export default PlayMidiAsync;