
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
    if (this.state.inCooker.length !== 3) {
      return;
    }

    let ingIds = `${this.state.inCooker[0].id}-${this.state.inCooker[1].id}-${this.state.inCooker[2].id}`
    fetch("/api/mix/"+ingIds, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //make sure to serialize your JSON body
      body: JSON.stringify({})
    })
    .then(res => res.json())
    .then(res => {
      if ( res.potionId > -1 ) {
        fetch('/api/potion/'+res.potionId)
            .then(res => res.json())
            .then(res => {
              this.setState({potion: res.name });
            })
            .catch ((error) => {
                console.log(error);
            });
      } else {
        this.setState({potion: "Last potion failed" });
      }

    })
    .then( (response) => {
       this.setState({inCooker: []});
       this.updateIngredients();
    });
  }

  componentDidMount() {
    this.updateIngredients();
  }

  updateIngredients() {
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
