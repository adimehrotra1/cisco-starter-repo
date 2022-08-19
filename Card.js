import React, {Component} from 'react'
import './Card.css';

class Card extends Component{
  render() {
  return (
    <div className="Card">
        <h2 className="CardTitle">{this.props.name}</h2>
        <div className="CardContent">
            {this.props.children}
        </div>
    </div>
);
}
}

export default Card