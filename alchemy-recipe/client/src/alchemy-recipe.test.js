import React from 'react';
import ReactDOM from 'react-dom';
import AlchemyRecipe from './alchemy-recipe';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlchemyRecipe />, div);
  ReactDOM.unmountComponentAtNode(div);
});
