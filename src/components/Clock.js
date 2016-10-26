import React, {Component} from 'react'
import moment from 'moment'

export default class Clock extends Component {
    constructor() {
        super()
        this.state = {
            currentTime: {
                hour: moment().format('HH'),
                minutes: moment().format('mm'),
                seconds: moment().format('ss')  
            },
            runningTime: {
                hour: ''
            },
            task: 'clocker'
        }
    }
    render() {
        return (
            <div className="clock">
                <div className="time">
                    <div className="hour">{this.state.currentTime.hour}</div>
                    <div className="hour-minus">
                        <div className="minutes">{this.state.currentTime.minutes}</div>
                        <div className="seconds">{this.state.currentTime.seconds}</div>
                    </div>
                </div>
                <div className="counter">
                    <label for="cronometer">Tempo clockado em {this.state.task}</label>
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
        }.bind(this), 1000)
    }
    componentWillUnmount() {
        clearInterval(this._interval)
    }
}