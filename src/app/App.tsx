import { useState } from "react";
import classes from "./App.module.scss"

export const App = () => {

    const [count, setCount] = useState(0)

    const handleAddCount = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            Hello WebPack!
            <div>
                Check hot reload or something
            </div>
            <h1>
                {count}
            </h1>
            <button
                onClick={handleAddCount}
                className={classes.button}
            >
                <div>
                    +1
                </div>
            </button>
        </div>
    );
}