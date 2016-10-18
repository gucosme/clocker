import React, {Component} from 'react';
import Block from './Block.js'
import Entrar from './Entrar.js'
import text from '../text.js'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Block name="Teste">
                    { text.split('\n\n').map((el) => <p>{el}</p>) }
                </Block>
            </div>
        );
    };
}