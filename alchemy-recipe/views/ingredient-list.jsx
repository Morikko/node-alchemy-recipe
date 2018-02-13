var React = require('react');
var Ingredient = require('./ingredient');

class IngredientList extends React.Component {
  render() {
    let ingredients = this.props.ingredients.map((ingredient, index)=>{
      return(
        <Ingredient key={"ing-"+index} name={ingredient.name} quantity={ingredient.quantity}/>
      )
    });
    return (
      <div
        className="ingredient-list">
        {ingredients}
      </div>
    );
  }
}

module.exports = IngredientList;
