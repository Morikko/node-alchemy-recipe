
import React from 'react';
import './alchemy-recipe.css';

import IngredientList from './ingredient-list';
import Cooker from './cooker';

class AlchemyRecipe extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        ingredients: [],
        inCooker: [],
        potion: "None created yet"
      };
  }

  render() {
    return (
      <div className="alchemy-recipe">
        <IngredientList ingredients={this.state.ingredients} onIngredientClick={this.addIngredient.bind(this)} />
        <Cooker inCooker={this.state.inCooker} onIngredientClick={this.removeIngredient.bind(this)} onMixClick={this.onMixClick.bind(this)}/>
        <div className="potion">Last potion created: {this.state.potion}</div>
      </div>
    );
  }

  addIngredient(id, name, quantity) {
    if (this.state.inCooker.length >= 3
      || quantity <= 0)
      return;

    this.setState({
      inCooker: this.state.inCooker.concat({id:id, name:name})
    });
  }

  removeIngredient(index) {
    if (this.state.inCooker.length < index
      || index < 0)
      return;

    let nextInCooker = JSON.parse(JSON.stringify(this.state.inCooker));
    nextInCooker.splice(index, 1);
    this.setState({
      inCooker: nextInCooker
    });
  }

  onMixClick(event) {
    console.log("button")
    if (this.state.inCooker.length !== 3)
      return;

    // TODO call API
  }

  componentDidMount() {
    fetch('/api/ingredients')
        .then(res => res.json())
        .then(res => {
          this.setState({ingredients: res });
        })
        .catch ((error) => {
            console.log(error);
        });
  }
}

export default AlchemyRecipe;
