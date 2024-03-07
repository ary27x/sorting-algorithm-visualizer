import React  , { useState , useEffect , createContext} from "react";
import "../styles/Form.css"
import Tray from "./Tray";

export const DataContext = createContext()
function Form()
{
    const [number , setNumber] = useState(100);
    const [algorithm , setAlgorithm] = useState("quickSort");
    const [data , setData] = useState([63, 69, 78, 39, 32, 100, 38, 9, 74, 86, 17, 11, 10, 81, 55, 48, 64, 6, 91, 56, 95, 84, 59, 44, 72, 28, 3, 41, 70, 62, 94, 96, 24, 87, 23, 99, 37, 13, 16, 42, 90, 77, 36, 52, 97, 40, 57, 76, 8, 85, 53, 79, 18, 2, 51, 92, 71, 7, 93, 22, 61, 43, 21, 35, 49, 47, 20, 34, 1, 75, 33, 5, 60, 68, 82, 30, 50, 54, 73, 4, 46, 88, 83, 98, 26, 19, 66, 65, 27, 45, 14, 15, 67, 58, 80, 25, 31, 89, 12, 29])
 
   
   
    function handleCountChange(e)
    {
        setNumber(e.target.value)
    }
    function handleAlgorithmChange(e)
    {
        setAlgorithm(e.target.value)
    }

    function generateSample(number)
    {
        document.getElementById("isSorted").value = 0
        if (number <= 0)
        {
            window.alert("Please Enter A Valid Array Size")
            return;
        }
  
        const newData = [];
        let dataCounter = 0;
        let randomElement;
        while (dataCounter  < number)
        {
            randomElement = Math.floor(Math.random() * number + 1);
            if (!newData.includes(randomElement)) 
            {
            newData[dataCounter] = randomElement;
            dataCounter++;
            }
        }
        setData(newData)
  

    }

    return (
        <React.Fragment>
            <div>
            <select name="sortingAlgorithm" id="sortingAlgorithm" className="formElement" onChange={handleAlgorithmChange}>
                <option value="quickSort">Quick Sort</option>
                <option value="cocktailShakerSort">Cocktail Shaker Sort</option>               
                <option value="gnomeSort">Gnome Sort</option>
                <option value="mergeSort">Merge Sort</option>
                <option value="bubbleSort">Bubble Sort</option>
                <option value="selectionSort">Selection Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                
          </select>
            <input id = "count" placeholder = "Array Size" className="formElement"  autoComplete="off" value = {number} onChange={handleCountChange}/>
            <button className="formElement" onClick={() => generateSample(number)} id = "generateButton">Generate Sample ↻</button>
       <DataContext.Provider value = {data}>
       <Tray  algorithm = {algorithm} data = {data} setData = {setData}/>
       </DataContext.Provider>
      
       </div>
     
        
        </React.Fragment>
    )
}


export default Form