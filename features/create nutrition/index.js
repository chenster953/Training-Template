const searchbox = document.querySelector('.search');
const minCalories = document.querySelector('.mincaloriesinput');
const maxCalories = document.querySelector('.maxcaloriesinput');
const submit = document.querySelector('.submit');
const recipes = document.querySelector('.recipes');
const lowest = document.querySelector('.lowest');
const highest = document.querySelector('.highest');

let results = false;
submit.addEventListener('click', ()=> {
  results === true;
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0b67ee8883dc43028b34e96eccabe5e7&query=${searchbox.value}&number=20&minCalories=${minCalories.value}&maxCalories=${maxCalories.value}`)
    .then((res) => res.json())
    .then((data) => {
      const results = data.results;
      console.log(results)
      results.forEach((result)=> {
        const newRecipe = document.createElement('div');
        newRecipe.innerHTML = `
        <img class='image' src=${result.image}>
        <h3 class='title'>${result.title}<h3/>
        <p class='calories'>Calories: ${parseInt(result.nutrition.nutrients[0].amount)}<p/>`;
        recipes.appendChild(newRecipe);
      })
    })
});

if (results) {
  
}