import { useEffect, useState } from "react"


export const TimerCount = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer)
    }, []);

    return (
        <div>

            <h4>Render : {count} times</h4>
        </div>
    )
}