import { useCallback, useEffect, useState } from "react"



export const TotalIncrement = () => {

    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
        setCount(previousCount => previousCount + 1)
    }, []);

    useEffect(() => {
        console.log("inside useEffect")
    }, [incrementCount]);


    const ButtonCount = () => {
        console.log("button count");
        return (
            <button onClick={incrementCount}>click me</button>
        )

    }
    return (
        <div>
            <h1>=========================useCallback============================</h1>
            <h3>{count}</h3>
            <ButtonCount incrementCount={incrementCount} />

        </div>
    )
}