let ingredientFactory = function (name, quantity) {
  return {
    name: name,
    quantity: quantity,
  }
}

// Id == index
var ingredients = [
  ingredientFactory("Vinegar", 14),
  ingredientFactory("Rat Head", 13),
  ingredientFactory("Lama Slaver", 10),
  ingredientFactory("Parsley", 15),
  ingredientFactory("Edgehog Spines", 1),
  ingredientFactory("Silver", 6),
  ingredientFactory("Gold", 3),
  ingredientFactory("Diamond", 3),
  ingredientFactory("Halibut", 3),
  ingredientFactory("Warthog Hairs", 16),
];

let potionFactory = function ( name, ingredientIds ) {
  return {
    name: name,
    ingredientIds: ingredientIds,
  }
}

// Id == index
var potions = [
  potionFactory("Invisibility"),
  potionFactory("Strength"),
  potionFactory("Speed"),
]

let recipeFactory = function ( potionId, ingredientIds ) {
  return {
    potionId: potionId,
    ingredientIds: ingredientIds,
  }
}

var recipes = [
  recipeFactory(0, [0,1,2]),
  recipeFactory(1, [3,6,1]),
  recipeFactory(2, [5,8,2]),
  recipeFactory(0, [4,5,3]),
]

module.exports = {
  ingredients: ingredients,
  potions: potions,
  recipes: recipes,
  recipeFactory: recipeFactory,
  potionFactory: potionFactory,
  ingredientFactory: ingredientFactory,
}
