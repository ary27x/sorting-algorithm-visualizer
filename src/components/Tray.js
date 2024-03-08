import React , {useContext , useEffect, useState} from "react";
import "../styles/Tray.css"
import {DataContext} from "./Form"
import inputOn from "../algorithms/inputOn";
import Bar from "./Bar"
import BubbleSort from "../algorithms/BubbleSort";
import cocktailShakerSort from "../algorithms/cocktailShakerSort";
import selectionSort from "../algorithms/selectionSort";
import insertionSort from "../algorithms/insertionSort";
import gnomeSort from "../algorithms/gnomeSort";
import mergeSort from "../algorithms/mergeSort";
import shellSort from "../algorithms/shellSort";
import quickSort from "../algorithms/quickSort";
function Tray(props)
{
    const data = useContext(DataContext)
    const [speed , setSpeed]  =useState(0)
    const [jump , setJump] = useState(0)
    const [sliderValue , setSliderValue] = useState(51)
    useEffect(() => {
        if (sliderValue <= 50)
        {
            const newSpeed =  Math.floor((((-10.2040816327) * sliderValue) +  511.204081633))
            setSpeed(newSpeed)   
        }
        else
        {
            const newJump  = Math.floor(( 2.02040816327* sliderValue) -  102.040816327)
            setJump(newJump)
        }

    } , [sliderValue])
    function sort()
    {
        
        if (document.getElementById("isSorted").value == "1")
        {
            return
        }
        
        document.getElementById("isSorted").value = "1"
        document.getElementById("sortingButton").disabled = true;
        document.getElementById("speed").disabled = true;
        document.getElementById("generateButton").disabled = true;
        switch(props.algorithm)
        {
            case "mergeSort" :
            {
                mergeSort(props.data , props.setData , speed ,jump )
                break;
            }
            case "quickSort" :
            {
                    quickSort(props.data , props.setData , speed ,jump)
                    break;
            }
            case "bubbleSort" :
            {
                
                BubbleSort(props.data , props.setData ,speed , jump)
                break;
            }
            case "selectionSort" :
            {
                selectionSort(props.data, props.setData , speed, jump)
                break;
            }
            case "insertionSort" :
            {
                insertionSort(props.data , props.setData , speed ,jump)
                break;
            }
            case "gnomeSort" :
            {
                gnomeSort(props.data , props.setData , speed ,jump)
                break;
            }
            case "cocktailShakerSort" :
            {
                cocktailShakerSort(props.data , props.setData , speed ,jump)
                break;
            }
        }

    }

    function handleSliderChange(event)
    {
        setSliderValue(event.target.value)
    }
   
    function handleStop()
    {
        inputOn();
    }
   
   
    return (<React.Fragment>

            <button onClick = {sort} id = "sortingButton" className="edit">Sort ⇄</button>
            {/* <button onClick = {handleStop} id = "stopButton" className="edit">Stop 🚫</button> */}
            {/* the stop button is not functioning properly hence it is commented */}
           <span id = "speed-wrapper">
            Speed
           <input type="range" min="1" max="100" value={sliderValue} className="speed-slider" id="speed" onChange={handleSliderChange}/>
   
           </span>
         



        <div className = "tray" id = "tray">
            <div className="screen" id = "screen">
            {
                data.map(function (item , i ) {
                    return <Bar length = {data.length} id={i} key = {i} value = {item} i = {i}/>
                })
            }
            </div>
            
        </div>
           
    
        
       
    </React.Fragment>)
}

export default Tray