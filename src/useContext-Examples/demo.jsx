import { useState ,createContext, useContext} from "react"
//without props acheciving child components in parent component.
let UserContext=createContext();

export function ParentComponent() {

    const [userName, setUserName] = useState("jenny")

    function handleChange(e){
        setUserName(e.target.value)
    }
    return (
        <div className="bg-success text-white p-4">
            <input type="text" placeholder="user name" onChange={handleChange}/>
            <UserContext.Provider value={userName}>
            <h4>Parent Component : {userName}</h4>
            <ChildComponent1 />
            </UserContext.Provider>
        </div>
    )
}

export function ChildComponent1() {
    let userName=useContext(UserContext);
    return (
        <div className="bg-primary text-white p-4">
            <h4>ChildComponent1 : {userName}</h4>
            <ChildComponent2 />
        </div>
    )
}
export function ChildComponent2() {
    let userName=useContext(UserContext);
    return (
        <div className="bg-dark text-white p-4">
            <h4>ChildComponent2 : {userName}</h4>
            <ChildComponent3 />
        </div>
    )
}
export function ChildComponent3() {
    let userName=useContext(UserContext);
    return (
        <div className="bg-secondary text-white p-4">
            <h4>ChildComponent3 : {userName}</h4>

        </div>
    )
}

