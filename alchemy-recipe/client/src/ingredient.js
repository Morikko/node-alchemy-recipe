import React from 'react';

class Ingredient extends React.Component {
  render() {
    return (
      <div
        className="ingredient"
        onClick={this.onClick.bind(this)}>
        {this.props.quantity + ' ' + this.props.name}
      </div>
    );
  }

  onClick(event) {
    this.props.onClick(this.props.id, this.props.name, this.props.quantity);
  }
}

export default Ingredient;
