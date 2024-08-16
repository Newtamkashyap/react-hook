import { useState } from "react"


export function UserDetails(){

    const[userName,setUserName]=useState('John')

    function handleChange(){
        setUserName("jenny");
        console.log("jenny")
    }
    function change(){
        setUserName("jony henh")
        console.log("jony henh")
    }

    return(
        <div>
            <p>diplay person details : {userName}</p>
            <button onDoubleClick={()=>setUserName("neetam")}>Double Click</button><br/>
            <button onClick={handleChange}>click</button><br/>
            <input onFocus={change}/><br/>
            <input onChange={()=>setUserName("trump")}/><br/>
            <button onSelect={()=>setUserName("Modi")}>submit</button><br/>
            </div>
    )
}