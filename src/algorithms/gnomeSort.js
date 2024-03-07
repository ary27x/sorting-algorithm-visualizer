import sleep from "./sleep";
import greenLayer from "./greenLayer";
import inputOn from "./inputOn";

async function gnomeSort(data , setData , speed , jump)
{
    let i;
    i = 0;
    const n = data.length
    let buffer = [...data]
    let counter = 0
    while (i < n)
    {
        const x = document.getElementById(i);
        let y;
        if (i == 0)
        {
        y = document.getElementById(i);
        }
        else
        {
        y = document.getElementById(i-1);
        }

        x.style.backgroundColor = "red"
        y.style.backgroundColor = "red"
        if ((i == 0) || (buffer[i] >= buffer[i-1]))
        {
            i++;
        }
        else
        {
            const temp = buffer[i]
            buffer[i] = buffer[i-1]
            buffer[i-1] = temp

            const tempHeight = x.style.height
            x.style.height = y.style.height
            y.style.height = tempHeight
            i--;
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
        x.style.backgroundColor = "black"
        y.style.backgroundColor = "black"

        setData(buffer)
    }
greenLayer(data, speed ,jump)
inputOn()
}
export default gnomeSort