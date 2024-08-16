import { useState } from "react"
//using props

export function Component1() {
  const[username,setUserName]=useState("john");
  return (
    <>
            <h1>=======================useContext=====================================</h1>
      
      <div className="bg dark text-white p-4">
        <h3>Parent component : {username}</h3>
        <Component2 username={username}/>
      </div>
    </>
  )
}

export function Component2({username}) {
  return (
    <div className="bg-warning text-white p-4">
      <h3>component2 </h3>
      <Component3 username={username} />
    </div>
  )

}

export function Component3({username}) {
  return (
    <div className="bg-success text-white p-4">
      <h3>component3</h3>
      <Component4 username={username}/>
    </div>
  )
}
export function Component4({username}) {
  return (
    <div className="bg-primary text-white p-4">
      <h3>component4</h3>
      <Component5 username={username}/>
    </div>
  )
}
export function Component5({username}) {
  return (
    <div className="bg-danger text-white p-4">
      <h3>component5 {username}</h3>
    </div>
  )
}
