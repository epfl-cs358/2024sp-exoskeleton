import React, { ReactElement, useState, useEffect} from 'react';
import './DrawPiano.styles.css';

import { Options as OptionsType } from '../../Utils/TypesForOptions';
import { noteEvent } from '../../Utils/TypesForMidi';
import MidiPlayer from '../../Helpers/MidiPlayer';
import {TracksInterval, TracksAnimationFrame} from '../Tracks';
import soundManager from '../../Helpers/soundManager';

interface DrawPianoProps{
    Data: Array<noteEvent> | undefined,
    Speed: number,
    options: OptionsType,
    drawSpeed: number,
    Player: MidiPlayer,
}

export default function DrawPiano({Data,Speed,options,drawSpeed,Player}:DrawPianoProps):ReactElement {

    // Set fixed dimensions for the piano
    const fixedWidth = 700; // Set fixed width to fit within the Card
    const fixedHeight = 310; // Set fixed height to fit within the Card

    const [WhiteKeyWidth,setWindowKeyWidth] = useState<number>(fixedWidth / 14); // 14 white keys in two octaves

    // const [WhiteKeyWidth,setWindowKeyWidth] = useState<number>(window.innerWidth / 14); // 14 white keys in two octaves
    // const [WhiteKeyWidth,setWindowKeyWidth] = useState<number>(window.innerWidth / 52); // 52 white keys in four octaves
    // const [windowHeight,setWindowHeight] = useState<number>(window.innerHeight);
    const [sound,setSound] = useState<soundManager>();

    // const handleResize = () =>{
    //     setWindowKeyWidth(window.innerWidth / 14);
    //     // setWindowKeyWidth(window.innerWidth / 52);
    //     setWindowHeight(window.innerHeight);
    //     // setWindowHeight(window.innerHeight);
    // }

    const KeysPositionsC3ToB4 = (type:('black' | 'all')):Array<any> =>{
        let Returning:Array<any> = []; // Array of objects with the position of the keys
        let counter_ids: number = 48; // Start at C3
        for (let x = 0; x < 14; x++) { // 14 white keys in two octaves
            type === 'all' && Returning.push({position: WhiteKeyWidth * x, noteNumber: counter_ids,width:WhiteKeyWidth});
            const num = counter_ids % 12; // 12 notes in an octave
            if(num  === 1 - 1 || num === 3 - 1 || num === 6 - 1 || num ===8 - 1 || num ===10 - 1  ){ // 1,3,6,8,10 are the black keys
                counter_ids++;
                if (counter_ids <= 71) { // Up to B4
                    type ==='all' && Returning.push({position : WhiteKeyWidth * x + WhiteKeyWidth / 1.4, notenumber: counter_ids,width:WhiteKeyWidth/1.8}); // 1.4 and 1.8 are the width of the black keys
                    type === 'black' && Returning.push(counter_ids); // Push the note number
                }
            }
            counter_ids++;
        }
        return Returning;
    }
    /*
    const KeysPositions = (type:('black' | 'all')):Array<any> =>{
        let Returning:Array<any> = [];
        let counter_ids:number = 21;
        for(let x = 0; x < 52; x++){
            type === 'all' && Returning.push({position: WhiteKeyWidth * x, noteNumber: counter_ids,width:WhiteKeyWidth});
            const num = counter_ids % 12;
            if(num  === 1 - 1 || num === 3 - 1 || num === 6 - 1 || num ===8 - 1 || num ===10 - 1  ){
                counter_ids++;
                if(counter_ids < 109){
                type ==='all' && Returning.push({position : WhiteKeyWidth * x + WhiteKeyWidth / 1.4, notenumber: counter_ids,width:WhiteKeyWidth/1.8});
                type === 'black' && Returning.push(counter_ids);
                }
            }
            counter_ids++;
        }
        return Returning;
    }
    */
    const RenderTracks = ():ReactElement =>{
        if(options.renderMethod === 'Interval'){
            return <TracksInterval
             Speed={drawSpeed} Data={Data!} 
             BlackNumbers={KeysPositionsC3ToB4('black')} 
             KeysPositions={KeysPositionsC3ToB4('all')} 
             intervalSpeed={Speed} 
             options={options} 
             Player={Player}
             sound={sound}/>
        }else{
            return <TracksAnimationFrame
             Speed={drawSpeed} Data={Data!}
             Width={fixedWidth}
            //  Width={WhiteKeyWidth*52}
            Height={fixedHeight}
            //  Height={windowHeight}
             BlackNumbers={KeysPositionsC3ToB4('black')} 
             KeysPositions={KeysPositionsC3ToB4('all')} 
             intervalSpeed={Speed} 
             options={options} 
             Player={Player}
             sound={sound}/>
        }
    }


    useEffect(()=>{
        // window.addEventListener('resize',handleResize);
        if(options.soundOn){
            setSound(new soundManager());
        }
        // return () =>{window.removeEventListener('resize',handleResize)}
    },[options.soundOn])

    return (
        <div className='Piano' style={{ height: fixedHeight, width: fixedWidth, overflow: 'hidden' }}>
            {sound && options.soundOn && RenderTracks()}
            {/* {!sound && options.soundOn && <div style={{width:window.innerWidth, height:window.innerHeight}} className='loading_sound'><img src={Gear as unknown as string} alt='Loading' /><h2>Sound Loading</h2><h3>If sound is not loading try clicking anywhere on the screen</h3></div>} */}
            {!options.soundOn && RenderTracks()}
        </div>
    )
}
