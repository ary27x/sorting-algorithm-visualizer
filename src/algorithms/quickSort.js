import sleep from "./sleep";
import greenLayer from "./greenLayer";
import inputOn from "./inputOn";





async function partition (buffer , left ,  right , setData , speed , jump) 
{
const pivotValue = buffer[right];

let i , j;
i = left; 
let counter = 0 
for (j = left ; j < right ; j++) 
{
if (buffer[j] <= pivotValue) 
{
    

    const x = document.getElementById(i);
    const y = document.getElementById(j);

    x.style.backgroundColor = "red"
    y.style.backgroundColor = "red"
    
    const tempHeight = x.style.height;
    x.style.height = y.style.height;
    y.style.height = tempHeight;



const temp = buffer[i]
buffer[i] = buffer[j]
buffer[j] = temp



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


i++;
}
}


const x2 = document.getElementById(i);
const y2 = document.getElementById(right);

x2.style.backgroundColor = "red"
y2.style.backgroundColor = "red"

const tempHeight = x2.style.height;
x2.style.height = y2.style.height;
y2.style.height = tempHeight;




const temp = buffer[i]
buffer[i] = buffer[right]
buffer[right] = temp





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

x2.style.backgroundColor = "black"
y2.style.backgroundColor = "black"

setData(buffer)
return i;

}


async function qS_recursion (buffer ,  left ,  right , setData , speed, jump)
{
if (left < right)
{

let pivotIndex = await partition(buffer , left , right , setData , speed, jump);

// while we recusively call the function we notice that the pivotIndex value is avoided is both the left side call and the right side call 
// this is because the pivot is relatively in the middle of the right and of its left values
await qS_recursion (buffer , left , pivotIndex - 1 , setData , speed, jump);
await qS_recursion (buffer , pivotIndex + 1 , right , setData , speed, jump);
}
}
async function quickSort(data , setData , speed , jump)
{
    let buffer = [...data]
const length = buffer.length
await qS_recursion (buffer , 0 , length - 1 , setData , speed, jump );
greenLayer(data , speed , jump)
inputOn()
}
export default quickSort