var React = require('react');
var DefaultLayout = require('./layouts/default');
var IngredientList = require('./ingredient-list');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout >
        <IngredientList ingredients={this.props.ingredients} />
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
