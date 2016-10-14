import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    render() {
        return (
            <div>
            <header className="navbar">
                <ul className="itens">
                    <li className="brand">
                        <Link to="/" activeClassName="active">CLOCKER</Link>
                    </li>
                </ul>
            </header>

            {this.props.children}

            </div>
        );
    }
}