const searchbox = document.querySelector('.search');
const minCalories = document.querySelector('.mincaloriesinput');
const maxCalories = document.querySelector('.maxcaloriesinput');
const submit = document.querySelector('.submit');
const recipes = document.querySelector('.recipes');
const lowest = document.querySelector('.lowest');
const highest = document.querySelector('.highest');

let results = false;
submit.addEventListener('click', ()=> {
  recipes.innerHTML = '';
  results = true;
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0b67ee8883dc43028b34e96eccabe5e7&query=${searchbox.value}&number=20&minCalories=${minCalories.value}&maxCalories=${maxCalories.value}`)
    .then((res) => res.json())
    .then((data) => {
      let recipeList = [];
      const results = data.results;
      results.forEach((result)=> {
        function Recipe(image, title, calories) {
          this.image = image;
          this.title = title;
          this.calories = calories;
        }
        let newRecipe = new Recipe(result.image, result.title, parseInt(result.nutrition.nutrients[0].amount));
        console.log(newRecipe);
        recipeList.push(newRecipe);
        const newRecipeDiv = document.createElement('div');
        newRecipeDiv.innerHTML = `
        <img class='image' src=${newRecipe.image}>
        <h3 class='title'>${newRecipe.title}<h3/>
        <p class='calories'>Calories: ${newRecipe.calories}<p/>`;
        recipes.appendChild(newRecipeDiv);      
        lowest.addEventListener('click', ()=> {
          recipeList.sort((a,b)=> {
            return a.calories - b.calories;
          })
          recipes.innerHTML = '';
          for (i = 0; i < recipeList.length; i++) {
            const lowestRecipeDiv = document.createElement('div');
            lowestRecipeDiv.innerHTML = `
            <img class='image' src=${recipeList[i].image}>
            <h3 class='title'>${recipeList[i].title}<h3/>
            <p class='calories'>Calories: ${recipeList[i].calories}<p/>`;
            recipes.appendChild(lowestRecipeDiv);
          }
        })
        highest.addEventListener('click', ()=> {
          recipeList.sort((a,b)=> {
            return b.calories - a.calories;
          })
          recipes.innerHTML = '';
          for (i = 0; i < recipeList.length; i++) {
            const highestRecipeDiv = document.createElement('div');
            highestRecipeDiv.innerHTML = `
            <img class='image' src=${recipeList[i].image}>
            <h3 class='title'>${recipeList[i].title}<h3/>
            <p class='calories'>Calories: ${recipeList[i].calories}<p/>`;
            recipes.appendChild(highestRecipeDiv);
          }
        })
      });
    })
});