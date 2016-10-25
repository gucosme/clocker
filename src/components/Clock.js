import React, {Component} from 'react'
import moment from 'moment'

export default class Clock extends Component {
    constructor() {
        super()
        this.state = {
            hour: moment().format('HH'),
            minutes: moment().format('mm'),
            seconds: moment().format('ss'),
            task: 'clocker'
        }
    }
    render() {
        return (
            <div className="clock">
                <div className="time">
                    <div className="hour">{this.state.hour}</div>
                    <div className="hour-minus">
                        <div className="minutes">{this.state.minutes}</div>
                        <div className="seconds">{this.state.seconds}</div>
                    </div>
                </div>
                <div className="counter">
                    <label>Tempo clockado em {this.state.task}</label>
                    <input placeholder="--:--:--" />
                </div>
            </div>
        )
    }
    componentDidMount() {
        this._interval = setInterval(function () {
            this.setState({
                hour: moment().format('HH'),
                minutes: moment().format('mm'),
                seconds: moment().format('ss')
            });
        }.bind(this), 1000);
    }
}