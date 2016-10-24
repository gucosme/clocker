import React, {Component} from 'react'
import Block from './Block.js'
import Entrar from './Entrar.js'
import Clock from './Clock.js'
import text from '../text.js'

export default class Home extends Component {
    render() {
        let blocks = ['1', '2', '3', '4', '5']
        let renderArr = []
        blocks.forEach((block) => {
            renderArr.push(<Block name={block}>{ text.split('\n\n').map((el) => <p>{el}</p>) }</Block>)
        })
        return (
            
            <div>
                <Block name="Relógio">
                    <Clock />
                </Block>
                {renderArr}
            </div>
        )
    }
}