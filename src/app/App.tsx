import { useState } from "react";
import "./App.scss"

export const App = () => {

    const [count, setCount] = useState(0)

    const handleAddCount = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            Hello WebPack!adsasd
            <h1>
                {count}
            </h1>
            <button
                onClick={handleAddCount}
            >
                <div>
                    +1
                </div>
            </button>
        </div>
    );
}