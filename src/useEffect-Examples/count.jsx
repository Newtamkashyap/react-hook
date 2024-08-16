import { useEffect, useState } from "react"


export const Counter=()=>{

    const[count,setCount]=useState(0);
    const[calculation,setCalculation]=useState(0)

    useEffect(()=>{
        setCalculation(()=>count*2);

    },[count])
    // function updateCounting(){
    //     setCalculation((calculation)=>calculation +1)
    // }
    return(
        <div>
            
            <h1>Counting : {count}</h1>
            <button onClick={()=>setCount((x)=>x+1)}>+</button>
            {/*question - kya x ki jagah count actual varaible le skte hai */}
            <p>calculation : {calculation}</p>
        </div>
    )

}