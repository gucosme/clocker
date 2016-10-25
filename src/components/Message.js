import React, {Component} from 'react'

import Button from './Button.js'
import text from '../text.js'

export default class Message extends Component {
    constructor() {
        super()
        this.state = {
            active: true
        }
        this.messageDismiss = this.messageDismiss.bind(this)
    }

    render() {
        return (
            <div className={`message ${this.state.active ? 'message-active' : ''}`}>
                <span className="close"><a onClick={this.messageDismiss}>DISPENSAR</a></span>
                <h4>{this.props.name.toUpperCase()}</h4>
                <hr />
                <p className="message-content">{this.props.message}</p>
            </div>
        )
    }

    messageDismiss() {
        this.setState({active: false})
    }
}