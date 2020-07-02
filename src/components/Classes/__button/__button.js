import React from "react";

class Button extends React.PureComponent{

    constructor(props) {
        super(props)

        this.state = {
            count: this.props.initCount ? this.props.initCount : 0
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div className="classes__button container__item">
                <b>Кнопка:</b><br/>
                <button onClick={this.onClick}>Вы нажали на меня {this.state.count} раз</button>
            </div>
        )
    }
}

export default Button