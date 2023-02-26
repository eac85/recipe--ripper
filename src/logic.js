let ingredients = null;

function handleLogic(id) {
  if(id === '1') {
        document.getElementById('title').style.display = 'none';
        document.getElementById('button1').style.display = 'none';
        document.getElementById('button2').style.display = 'inline';
        document.getElementById('textareas').style.display = 'inline';
        document.getElementById('textarea1').style.display = 'inline';
        document.getElementById('textarea1').value = `1 cup salted butter* softened
1 cup white (granulated) sugar
1 cup light brown sugar packed
2 tsp pure vanilla extract
2 large eggs
3 cups all-purpose flour
1 tsp baking soda
½ tsp baking powder
1 tsp sea salt
2 cups chocolate chips (or chunks, or chopped chocolate)`;
        document.getElementById('textarea2').value = `Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.
In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.
Cream together butter and sugars until combined.
Beat in eggs and vanilla until fluffy.
Mix in the dry ingredients until combined.
Add 12 oz package of chocolate chips and mix well.
Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. (alternately, use a small cookie scoop to make your cookies).
Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just BARELY starting to turn brown.
Let them sit on the baking pan for 2 minutes before removing to cooling rack`;
  }
  if(id === '2'){
    document.getElementById('textarea1').style.display = 'none';
    document.getElementById('textarea2').style.display = 'inline';
    document.getElementById('button2').style.display = 'none';
    document.getElementById('button3').style.display = 'inline';
    ingredients = separateIngredients(document.getElementById('textarea1').value);
    console.log("ingredients= ");
    console.log(ingredients);
  }
  if(id === '3'){
    document.getElementById('textarea2').style.display = 'inline';
    document.getElementById('button3').style.display = 'none';
    var instructions = document.getElementById('textarea2').value;
    console.log("instructions=" + instructions);
    sessionStorage.setItem("instructions", instructions);   
    var generatedRecipe = substituteIngredients(ingredients, instructions);
    document.getElementById('textarea2').value = generatedRecipe;
  }
}
function disappear(props){
  alert(props.name);
  props.name = 'next';
}
export  {handleLogic, disappear};

function separateIngredients(ingredients) {
  let amount = null;
  let name = null;
  const ingredientsList = ingredients.split("\n");
  const separatedIngredients = [];
  for (let i = 0; i < ingredientsList.length; i++) {
    const ingredient = ingredientsList[i].trim();
    if (ingredient !== "") {
      console.log(ingredient);
      if(ingredient.includes('cups')){
        amount = ingredient.slice(0, ingredient.indexOf('cups') + 4);
      }
      else if(ingredient.includes('cup')){
        amount = ingredient.slice(0, ingredient.indexOf('cup') + 3);
      }
      else if(ingredient.includes('tbs')){
        amount = ingredient.slice(0, ingredient.indexOf('tbs') + 3);
      }
      else if(ingredient.includes('tsp')){
        amount = ingredient.slice(0, ingredient.indexOf('tsp') + 3);
      }
      else {
        amount = ingredient.match(/^[\d./\u00BC\u00BD]+/)[0];
      }
      name = ingredient.replace(amount, "").trim(); 
      separatedIngredients.push({ name, amount }); 
    }
  }
  return separatedIngredients;
}


function substituteIngredients(ingredientArray, instructions) {
  let result = instructions;
  console.log(ingredientArray[0].name);
  for (let i = 0; i < ingredientArray.length; i++) {
    let ingredient = ingredientArray[i].name;
    console.log("ingredient[i].name " + ingredient);
    let regex = new RegExp(ingredient, 'g');
    console.log(i + ' ' + ingredient);
    console.log(regex);
    result = result.replace(regex, ingredientArray[i].amount + ' ' + ingredient);
    console.log(result);
  }

  return result;
}