import React, {Component} from 'react'

import Navbar from './Navbar.js'
import Message from './Message.js'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <main className="container">
                    {this.props.children}
                </main>

                <Message name="Gustavo" message="Texto teste para mensagem"/>
            </div>
        )
    }
}