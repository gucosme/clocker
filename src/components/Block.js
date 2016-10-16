import React, {Component} from 'react';
import text from '../text.js'

export default class Block extends Component {
  render() {
    return (
      <div className="block">
          <h3>Home</h3>
          { text.split("\n\n").map((el) => <p>{el}</p>) }
      </div>
    );
  }
}