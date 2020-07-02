import React, {useState} from "react";

function __button({initCount}) {
    initCount = initCount ? initCount : 0
    const [count, setCount] = useState(initCount);
    const onClick = () => {
        setCount(count + 1)
    }

    return(
        <div className="functional__button">
            <button onClick={onClick}>Вы нажали на меня {count} раз</button>
        </div>
    )
}

export default __button