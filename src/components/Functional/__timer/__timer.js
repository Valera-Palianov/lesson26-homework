import React, {useState, useEffect} from "react";

function Timer({sec}) {

    const seconds = sec ? sec : 10

    const [done, setDone] = useState(false)
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if(current !== seconds) {
                if(current === seconds - 1) {setDone(true)}
                setCurrent(current + 1)
            }
        }, 1000);
    })

    let status = done ? "Done!" : "Ticking..."
    return(
        <div className="functional__timer container__item">
            <b>Таймер:</b><br/>
            {current}/{seconds}<br/>
            {status}
        </div>
    )
}

export default Timer