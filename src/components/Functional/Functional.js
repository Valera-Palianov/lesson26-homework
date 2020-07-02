import React from "react";
import Button from "./__button/__button"
import Textarea from "./__textarea/__textarea";
import Timer from "./__timer/__timer";

function Functional() {
    return(
        <div className='functional container'>
            <h2>Функциональные компоненты:</h2>
            <Button initCount={2} />
            <Textarea limiter={12}/>
            <Timer />
        </div>
    )
}

export default Functional