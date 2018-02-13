import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AlchemyRecipe from './alchemy-recipe';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AlchemyRecipe />, document.getElementById('root'));
registerServiceWorker();
