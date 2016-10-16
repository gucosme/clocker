import React, {Component} from 'react';
import Block from './Block.js'

export default class Home extends Component {
    render() {
        return (
            <div className="content">
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
            </div>
        );
    };
}