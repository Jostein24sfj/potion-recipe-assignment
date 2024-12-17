let herbs = 0;
let berries = 0;
let mushrooms = 0;
let water = 0;
let flowers = 0;

const ingredients = {
  herbs: 0,
  berries: 0,
  mushrooms: 0,
  water: 0,
  flowers: 0,
};

function addIngredient(ingredient) {
  return (
    ingredients[ingredient]++,
    console.log(ingredient + " :", ingredients[ingredient])
  );
}
function decreaseIngredient(ingredient) {
  return (
    ingredients[ingredient]--,
    console.log(ingredient + " :", ingredients[ingredient])
  );
}

// function addIngredient(ingredient) {
//   return (
//     (herbs = ingredient + 1),
//     console.log(ingredient)
//   )
// }
function checkPotion() {
  if (
    ingredients["herbs"] == 2 &&
    ingredients["berries"] == 1 &&
    ingredients["mushrooms"] == 1 &&
    ingredients["water"] == 0 &&
    ingredients["flowers"] == 0
  ) {
    return console.log(
      "Congratulations! You've brewed a perfect healing potion!"
    );
  } else {
    return console.log("you failed... this taste like S#%!");
  }
}

// addIngredient();
// console.log(herbs);
// addIngredient();
// console.log(herbs);
// addIngredient();
// console.log(herbs);
// addIngredient();
// console.log(herbs);
// addIngredient();
// console.log(herbs);
