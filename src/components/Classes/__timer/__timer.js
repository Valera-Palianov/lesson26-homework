import React from "react";

class Timer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            done: false,
            seconds: this.props.sec ? this.props.sec : 10,
            current: 0,
            intervalId: null
        }

        this.timer = this.timer.bind(this)
    }

    componentDidMount() {
        const intervalId = setInterval(this.timer, 1000);
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    timer() {
        if(this.state.current === this.state.seconds) {
            clearInterval(this.state.intervalId)
        } else {
            if(this.state.current === this.state.seconds - 1) {
                this.setState({
                    done: true
                })
            }
            this.setState({
                current: this.state.current + 1
            })
        }
    }

    render() {
        let status = this.state.done ? "Done!" : "Ticking..."
        return(
            <div className="class__timer container__item">
                Таймер:<br/>
                {this.state.current}/{this.state.seconds}<br/>
                {status}
            </div>
        )
    }
}

export default Timer