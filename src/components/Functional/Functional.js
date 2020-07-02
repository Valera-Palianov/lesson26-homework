import React from "react";
import __button from "./__button/__button"

function Functional(props) {
    return(
        <div className='functional'>
            <h2>Функциональные компоненты:</h2>
            <__button initCount={2}></__button>
        </div>
    )
}

export default Functional