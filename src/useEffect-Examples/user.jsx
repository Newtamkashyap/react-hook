import { useEffect, useState } from "react"



export const Timer = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
        //question - ye yaha count 1 kr rhe hai to 2 q aa rha hai

    },[]);//run only one time

    return (
        <div>
            <h1>=======================useEffect=====================================</h1>
        
           
            <p>Count : {count} times!</p>
        </div>
    )
}