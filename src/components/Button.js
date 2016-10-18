import React, {Component} from 'react';

export default class Button extends Component {
    constructor() {
        super();
        this.alertTest = this.alertTest.bind(this);
    }
    alertTest() {
        console.log('Funciona')
    }
    render() {
        return (
            <button onClick={this.alertTest} className={'btn ' + this.props.type}>{this.props.name}</button> 
        );
    }
}