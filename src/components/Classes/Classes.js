import React from "react";
import __button from "./__button/__button";

class Classes extends React.PureComponent {
    render() {
        return(
            <div className='class'>
                <h2>Классовые компоненты:</h2>
                <__button initCount={5}></__button>
            </div>
        )
    }
}

export default Classes