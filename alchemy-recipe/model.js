// TODO: ADD images
let ingredientFactory = function (name, quantity) {
  return {
    name: name,
    quantity: quantity,
  }
}

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

var potions = [
  potionFactory("Invisibility"),
]

let recipeFactory = function ( potionId, ingredientIds ) {
  return {
    potionId: potionId,
    ingredientIds: ingredientIds,
  }
}

var recipes = [
  recipeFactory(0, [3,4,8]),
]

module.exports = {
  ingredients: ingredients,
  potions: potions,
  recipes: recipes,
}
