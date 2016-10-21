import React, {Component} from 'react'

export default class Block extends Component {
  render() {
    return (
      <div className="block">
        <div className="block-title">
          <h3>{this.props.name.toUpperCase()}</h3>
        </div>
        <div className="block-content">
          {this.props.children}
        </div>         
      </div>
    )
  }
} 