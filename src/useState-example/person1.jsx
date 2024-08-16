import { useState } from "react";
import '../useState-example/person.css';


export const PersonAllDetails = () => {

    const [usersDetails, setUserDetails] = useState({
        name: "ROhan",
        course: "python",
        fee: 2500,
        institute: "NareshIt",
        faculty: "Satish gupta"

    })

    const updateName=()=>{
        setUserDetails(obj=>{
            return {...obj,name:"Suresh"}
        })
    }

    return (
        <>
            <h1>=======================useState=====================================</h1>
        
        <div style={{width:"30%",height:"10%", border:"2px solid black", textAlign:"center"}} className={"bg"}>
            <h5>person name : {usersDetails.name}</h5>
            <h5>person Fee : {usersDetails.fee}</h5>
            <h5>person institute : {usersDetails.institute}</h5>
            <h5>person course : {usersDetails.course}</h5>
            <h5>person Faculty : {usersDetails.faculty}</h5>
            <button type="button" onClick={updateName}>update</button>
        </div>

        </>
    )
}