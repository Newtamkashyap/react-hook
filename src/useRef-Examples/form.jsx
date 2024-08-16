import { useRef } from "react"


export const UseRefDemo = () => {


    const username = useRef(null);
    const password = useRef(null);


    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(username.current.value, password.current.value)
    }

    return (
        <>
        <h1>=========================useRef========================</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" id="username" ref={username} />
                <br />
                <input type="text" id="password" ref={password} />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}