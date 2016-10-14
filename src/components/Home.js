import React, {Component} from 'react';
import text from '../text.js'

export default class Home extends Component {
    render() {
        return (
            <div className="content">
                <div className="post">
                    <h3>Home</h3>
                    {
                        text.split("\n\n")
                            .map((el) => <p>{el}</p>)
                    }
                </div>
            </div>
        );
    };
}