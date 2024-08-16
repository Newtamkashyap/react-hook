import { useState } from "react"


export const UpdateDetails=()=>{

    const[name,setName]=useState("john");
    const[course,setCourse]=useState("Java");
    const[fee,setFees]=useState('2500');
    const[faculty,setFaculty]=useState("ganesh mahajan");
return(

    <div>
        <p>person Name : {name}</p>
        <p>person Course : {course}</p>
        <p>person Fees : {fee}</p>
        <p>person Faculty : {faculty}</p>

    </div>
)
}