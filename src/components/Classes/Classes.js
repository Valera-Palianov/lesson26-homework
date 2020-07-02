import React from "react";
import Button from "./__button/__button";
import Textarea from "./__textarea/__textarea";
import Timer from "./__timer/__timer";

class Classes extends React.PureComponent {
    render() {
        return(
            <div className='class container'>
                <h2>Классовые компоненты:</h2>
                <Button initCount={5} />
                <Textarea limiter={3}/>
                <Timer sec={15}/>
            </div>
        )
    }
}

export default Classes