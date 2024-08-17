

export function Demo(){

    const student=()=>{
        alert("hello students")
    }
    return(
        <>
        <h4>Hello Demo function , we will use react events</h4>
        <button onClick={student}><a href="">click me</a> </button>
        </>
    )
}