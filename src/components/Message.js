import React, {Component} from 'react';
import text from '../text.js'

export default class Message extends Component {
    render() {
        return (
            <div className={'message ' + this.props.type}>
                <span className="close">DISPENSAR</span>
                <h4>{this.props.name}</h4>
                <p className="message-content">{text}</p>
            </div>
        );
    }
}