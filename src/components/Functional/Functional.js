import React from "react";
import Button from "./__button/__button"

function Functional() {
    return(
        <div className='functional'>
            <h2>Функциональные компоненты:</h2>
            <Button initCount={2} />
        </div>
    )
}

export default Functional