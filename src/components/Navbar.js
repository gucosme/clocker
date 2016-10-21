import React, {Component} from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
    render() {
        return (
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
        )
    }
}