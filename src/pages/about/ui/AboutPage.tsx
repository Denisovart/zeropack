import { useState } from "react";

export const AboutPage = () => {

    const [count, setCount] = useState(0)

    const handleAddCount = () => {
        setCount(prev => prev + 1)
    }

    if (__ISDEV) {
        return (
            <div>
                This is dev mode
                <h1>{count}</h1>
                <button
                    onClick={handleAddCount}
                >
                    +1
                </button>
            </div>
        )
    }

    return ( 
        <div>
            This is AboutPage
        </div>
    );
}