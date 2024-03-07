import sleep from "./sleep";
import greenLayer from "./greenLayer";
import inputOn from "./inputOn";




async function insertionSort(data ,setData , speed , jump , gap)
{

let buffer = [...data]
const n = buffer.length



    let i , j , key;
    let counter = 0
for (i = gap ; i < n ; i+=gap)
{
    
    key = buffer[i]
    j = i - gap
    
   let keyElement = document.getElementById(i)
    const keyHeight = keyElement.style.height

    keyElement.style.backgroundColor = "red"
    let comparisonElement
    while (j >= 0 && buffer[j] > key)
    {
        comparisonElement = document.getElementById(j)
        comparisonElement.style.backgroundColor = "red"

        buffer[j+gap] = buffer[j];

        const x = document.getElementById(j);
        const y = document.getElementById(j+gap);

        x.style.backgroundColor = "red"
        y.style.backgroundColor = "red"
        
        const tempHeight = x.style.height;
        x.style.height = y.style.height;
        y.style.height = tempHeight;

        j-=gap;

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

     x.style.backgroundColor = "black"
    y.style.backgroundColor = "black"





    }

    buffer[j+gap] = key;

    document.getElementById(j+gap).style.height = keyHeight
    keyElement.style.backgroundColor = "black"
    setData(buffer)
   
    
}
}
//greenLayer(data, speed , jump)




async function shellSort(data , setData , speed ,jump)
{
    let buffer = [...data]
    const length = buffer.length
    let gap = Math.floor(length/2);
    while (gap > 1)
    {
  
    await insertionSort (data , setData , speed ,jump, gap);
    gap = Math.floor(gap / 2);
}
    await insertionSort (data , setData , speed ,jump, 1) 

    
  
    setData(buffer)
    sleep(1000)
    setData(buffer)

    greenLayer(data , speed ,jump)
    inputOn()
}

export default shellSort