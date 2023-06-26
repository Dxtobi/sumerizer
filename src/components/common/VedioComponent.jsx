import { useRef, useState } from "react"
import {BsArrowClockwise, BsArrowCounterclockwise, BsPlay} from 'react-icons/bs'
// eslint-disable-next-line no-useless-escape
const defaultSrc = '/emo.mp4'
// eslint-disable-next-line react/prop-types
function VedioComponent({ width, height, className, src = defaultSrc }) {
    const [loadingPercent, updateLoadingPercent] = useState(30);
    const vidRef = useRef(null);
    const prevFunction = () => { }
    const playFunction = () => { 
        vidRef.current.play =true
    }
    const nextFunction = () => { }
    
    
    return (
        <div className="relative w-full">
            <video ref={vidRef} controls={false} width={width} height={height} className={className}>
                <source src={src}>

                </source>
            </video>
            <div className="w-full h-full bg-[#4747bf9a] absolute top-0 left-0">
                <div className="flex justify-around top-1/3 absolute w-full">
                    <button onClick={prevFunction}><BsArrowCounterclockwise size={85}/></button>
                    <button onClick={playFunction} className="rounded-full w-[150px] h-[150px] border-2 border-white flex justify-center items-center"><BsPlay size={85}/></button>
                    <button onClick={nextFunction}><BsArrowClockwise size={85}/></button>
                </div>
                <div className="w-[90%] h-1 bg-white m-auto absolute bottom-4 left-0 right-0">
                    <div className={`w-[20px] h-[20px] bg-white -top-[0.5rem] absolute rounded-full left-[${loadingPercent}%]`}></div>
                </div>
            </div>
        </div>
    );
}

export default VedioComponent;

