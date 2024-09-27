import { useState } from "react";
import s from "./App.module.scss"

export const App = () => {

    const [count, setCount] = useState(0)

    const handleAddCount = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            Hello WebPack!
            <h1>
                {count}
            </h1>
            <button
                onClick={handleAddCount}
                className={s.button}
            >
                +1
            </button>
        </div>
    );
}