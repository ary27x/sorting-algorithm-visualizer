import sleep from "./sleep";
import greenLayer from "./greenLayer";
import inputOn from "./inputOn";


async function mS_merge(buffer , left , right , middle , setData, speed , jump)
{
    
const leftLength = middle - left + 1;
const rightLength = right - middle;
const n = buffer.length
let i , j , k;
let tempLeft = new Array (leftLength)
let tempRight = new Array (rightLength)
let counter = 0
for (i = 0 ; i < leftLength ; i++)
{
    tempLeft[i] = buffer[left + i]
}
for (i = 0 ; i < rightLength ; i++)
{
    tempRight[i] = buffer[middle + 1 + i]
}

const remainder = left;
for (i = 0 , j = 0 , k = left ; k <= right; k++)
{
    let x , y
    if (i < leftLength)
    {
        
        x = document.getElementById(left + i)
        x.style.backgroundColor = "red"

    }

    
    if (j < rightLength)
    {
        y = document.getElementById(left + leftLength + j - 1)
        y.style.backgroundColor = "red"
    }
   
    
    

    if ( (i<leftLength) && ((j>=rightLength) || (tempLeft[i]<=tempRight[j])))
    {
        const barHeight = String((tempLeft[i]/ (n )) * 100) + "%"
        document.getElementById(k).style.height = barHeight
        
        x.style.backgroundColor = "black"
        buffer[k] = tempLeft[i];
        i++;
         if (i < leftLength)
    {
        
        x = document.getElementById(left + i)
        x.style.backgroundColor = "red"

    }

    }
    else
    {
        const barHeight = String((tempRight[j]/ (n )) * 100) + "%"
        document.getElementById(k).style.height = barHeight
        
        
        y.style.backgroundColor = "black"
        buffer[k] = tempRight[j];
        j++;
        if (j < rightLength)
        {
            y = document.getElementById(left + leftLength + j - 1)
            y.style.backgroundColor = "red"
        }
       
    }
    if (jump != 0)
                {
                    if (counter == jump)
                    {
                        counter = 0
                        await sleep(speed)
                      
                    }
                    counter++;
                }
                else
                {
                    await sleep(speed)
                }
    setData(buffer)
}
setData(buffer)
}
async function mS_recursion(buffer, left , right , setData, speed , jump)
{
    if (left < right)
    {
        
        const middle = Math.floor( left + (right - left) /2);
        await mS_recursion(buffer , left , middle , setData, speed , jump)
        await mS_recursion(buffer , middle + 1, right , setData, speed , jump)


        await mS_merge(buffer , left , right , middle , setData, speed , jump)
    }
}


async function mergeSort(data ,setData , speed , jump)
{


    let buffer = [...data] //  we play around with the buffer , not the data array
    const n = buffer.length
    await mS_recursion(buffer , 0 , n - 1 ,setData, speed , jump)
    setData(buffer)
    greenLayer(data ,speed , jump)
    inputOn()
}



export default mergeSort