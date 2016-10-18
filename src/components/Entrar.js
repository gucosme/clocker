import React, {Component} from 'react';
import Block from './Block.js';
import Button from './Button.js';

export default class Entrar extends Component {
    render() {
        return (
            <Block name="Login">
                <label>Usuário</label> <br />
                <input placeholder="@exemplo" /> <br />
                <hr />
                <label>Senha</label> <br />
                <input placeholder="********" type="password" /> <br />
                <Button name="ENTRAR"/>
                <Button type="confirm" name="ENTRAR"/>
                <Button type="default" name="ENTRAR"/>
                <Button type="danger" name="ENTRAR"/>
                <Button type="alert" name="ENTRAR"/>
            </Block>
        );
    }
}