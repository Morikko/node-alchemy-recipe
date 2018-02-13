var model = require('./model')

/**
 * Check if the ingredients are part of a recipe and return the valid potion id
 * All valid ingredient quantities are ALWAYS decreased by 1
 * An ingredient quantity has to be bigger than 0
 * If there are more/less than 3 ingredients, the potion creation will fail
 * The recipe must use 3 different ingredients
 * @param {Array[Number]} ingredientIds
 * @return {Number} potionId or -1 if nothing
 */
function make_recipe(ingredientIds) {
  // Reduce quantities
  let hasInvalid = false;
  for (let id of ingredientIds) {
    if ( id < model.ingredients.length && id >= 0 && model.ingredients[id].quantity > 0 ) {
      model.ingredients[id].quantity--;
    } else {
      hasInvalid = true;
    }
  }

  // Check validity
  if (hasInvalid
  || ingredientIds.length !== 3 ) {
    return -1;
  }

  // Check recipe
  let recipes = JSON.parse(JSON.stringify(model.recipes));
  for (let id of ingredientIds) {
    recipes = recipes.filter((recipe => recipe.ingredientIds.includes(id)));

    if ( !recipes.length )
      break;
  }

  // Return potion id
  if ( recipes.length ) {
    return recipes[0].potionId;
  } else {
    return -1;
  }
}

module.exports = {
  make_recipe: make_recipe,
}
