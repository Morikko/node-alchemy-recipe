var React = require('react');

class Ingredient extends React.Component {
  render() {
    return (
      <div
        className="ingredient">
        {this.props.quantity + ' ' + this.props.name}
      </div>
    );
  }
}

module.exports = Ingredient;
