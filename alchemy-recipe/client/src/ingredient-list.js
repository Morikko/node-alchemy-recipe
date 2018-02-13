import React from 'react';
import Ingredient from './ingredient';

class IngredientList extends React.Component {
  render() {
    let ingredients = this.props.ingredients.map((ingredient, index)=>{
      return(
        <Ingredient key={"ing-"+index} name={ingredient.name} quantity={ingredient.quantity} id={index} onClick={this.props.onIngredientClick} />
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

export default IngredientList;
