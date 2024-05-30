import React,{useEffect,useState} from 'react';
import { Box, Card } from '@chakra-ui/react';

import DrawPiano from '../Components/DrawPiano/DrawPiano';
import MidiPlayer from '../Helpers/MidiPlayer';
import { DefaultOptions } from '../Utils/Default';
import { Options as OptionsType } from '../Utils/TypesForOptions';
import { noteEvent } from "../Utils/TypesForMidi";
import { ReadFromLocalStorageBase64 } from '../Utils/smallFunctions';

export default function Play() {

    const [options,setOptions] = useState<OptionsType>(DefaultOptions);
    const [Player,setPlayer] = useState<MidiPlayer>();
    const [Events,setEvents] = useState<Array<noteEvent>>();

    useEffect(() => {
        const options = JSON.parse(localStorage.getItem('options')!);
        const file = ReadFromLocalStorageBase64('file');
        setOptions(options);
        setPlayer(new MidiPlayer(file,handleMidiEvent,25)); // 25 is the default timeStamps for the midi file to be played
    }, []);

    useEffect(() => {
        Player?.Restart();
    }, [Player])

    const handleMidiEvent = (Events:Array<noteEvent>) =>{
        Events.length > 0 && setEvents(Events);
    }

    return (
        <Card align='start' bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='99.2%' h='310px'> {/* setting the width to 100% and max-width to 100% as well, and so for the entire card */}
            {Player && <DrawPiano drawSpeed={options.playSpeed} Player={Player} Data={Events} Speed={options.speed} options={options} />}
        </Card>
    )
}
