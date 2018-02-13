import React from 'react';

class Cooker extends React.Component {

  render() {
    let ingredients = this.props.inCooker.map((ingredient, index)=>{
      return (<div
        className={"cook-ing"+index+1}
        key={"cook-ing"+index+1}
        onClick={(event)=>{
          this.props.onIngredientClick(index);
        }}  >
        {`Ingredient ${index+1}: ${ingredient.name}`}
      </div>)
    });
    return (
      <div className="cooker">
        {ingredients}
        <input type="button" value="Mix" onClick={this.props.onMixClick} />
      </div>
    );
  }
}

export default Cooker;
