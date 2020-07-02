import React from "react";

class Textarea extends React.PureComponent{

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            length: 0,
            limiter: this.props.limiter ? this.props.limiter : 10
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange = (e) => {
        const length = e.target.value.length
        if(length <= this.state.limiter) {
            this.setState({
                length: length,
                value: e.target.value
            })
        }
    }

    render() {
        return(
            <div className="class__textarea container__item">
                <b>Текстовая область с ограничителем:</b><br/>
                <textarea onChange={this.onChange} value={this.state.value}/><br />
                {this.state.length}/{this.state.limiter}
            </div>
        )
    }
}

export default Textarea