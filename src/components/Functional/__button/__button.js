import React, {useState} from "react";

function Button({initCount}) {
    initCount = initCount ? initCount : 0
    const [count, setCount] = useState(initCount);
    const onClick = () => {
        setCount(count + 1)
    }

    return(
        <div className="functional__button container__item">
            Кнопка:<br/>
            <button onClick={onClick}>Вы нажали на меня {count} раз</button>
        </div>
    )
}

export default Button