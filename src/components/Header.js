import React, {Component} from 'react';
import { Link } from 'react-router';

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
                        <li>ENTRAR</li>
                    </ul>
                </nav>
            </header>

            <main className="container">
                {this.props.children}
            </main>

            </div>
        );
    }
}