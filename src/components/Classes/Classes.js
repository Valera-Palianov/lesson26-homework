import React from "react";
import Button from "./__button/__button";

class Classes extends React.PureComponent {
    render() {
        return(
            <div className='class'>
                <h2>Классовые компоненты:</h2>
                <Button initCount={5} />
            </div>
        )
    }
}

export default Classes