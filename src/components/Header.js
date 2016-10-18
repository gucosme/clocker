import React, {Component} from 'react';
import { Link } from 'react-router';
import Message from './Message.js'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header  className="navbar">
                    <nav className="container">
                        <ul className="itens">
                            <li className="brand">
                                <Link to="/" activeClassName="active">REKCOLC</Link>
                            </li>
                            <li>
                                <Link to="/entrar" className="link">ENTRAR</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main className="container">
                    {this.props.children}
                </main>

                <Message name="TESTE" message="Texto teste para mensagem"/>
            </div>
        );
    }
}