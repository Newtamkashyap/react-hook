import { useMemo, useState, memo } from "react";

const ExpensiveComponent = memo(() => {
    const sum = () => {
        console.log("calculating sum");
        let i = 0;
        for (i = 0; i <= 100000000; i++) {

        }
        return i;
    };

    const total = useMemo(() => sum(), []) //returning sum 


    return <p>sum : {total}</p>
})

export const MemoParentComponent = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <h1>========================useMemo==========================</h1>
            <div className="p-4  font-display  bg-black text-white">
                <ExpensiveComponent />
                <button onClick={() => setCount(count + 1)} className="py-3 rounded rounded-sm">Re-render parent</button>
                <p>Parent re-renders : {count}</p>
            </div>
        </>
    )
}