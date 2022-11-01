const searchbox = document.querySelector('.search');
const minCalories = document.querySelector('.mincaloriesinput');
const maxCalories = document.querySelector('.maxcaloriesinput');
const submit = document.querySelector('.submit');
const recipes = document.querySelector('.recipes');
const lowest = document.querySelector('.lowest');
const highest = document.querySelector('.highest');
const savedButton = document.querySelector('.saved');
const dragging = document.querySelector('.dragging'); 

let draggingElements;
let draggingElementTitle;
let draggingElementLink;
let draggingElementImage;
let draggingElementCalories;

let savedRecipes = [];
function Recipe(image, title, calories, link, id) {
  this.image = image;
  this.title = title;
  this.calories = calories;
  this.link = link;
  this.id = id
}

submit.addEventListener('click', ()=> {
  recipes.innerHTML = '';
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0b67ee8883dc43028b34e96eccabe5e7&query=${searchbox.value}&number=20&minCalories=${minCalories.value}&maxCalories=${maxCalories.value}&addRecipeInformation=true&addRecipeNutrition=true`)
    .then((res) => res.json())
    .then((data) => {
      let recipeList = [];
      savedRecipes = [];
      const results = data.results;
      console.log(results)
      results.forEach((result)=> {
        let newRecipe = new Recipe(result.image, result.title, parseInt(result.nutrition.nutrients[0].amount), result.spoonacularSourceUrl, result.id);
        recipeList.push(newRecipe);
        const newRecipeDiv = document.createElement('div');
        newRecipeDiv.innerHTML = `
        <img class='image' src=${newRecipe.image}>
        <h3 class='title'>${newRecipe.title}</h3>
        <p class='calories'>Calories: ${newRecipe.calories}</p>`;
        newRecipeDiv.setAttribute('draggable', true);
        newRecipeDiv.setAttribute('title', `${newRecipe.title}`);
        newRecipeDiv.setAttribute('link', `${newRecipe.link}`);
        newRecipeDiv.setAttribute('calories', `${newRecipe.calories}`);
        newRecipeDiv.setAttribute('image', `${newRecipe.image}`);
        recipes.appendChild(newRecipeDiv);
        newRecipeDiv.addEventListener('click', ()=> {
          (window.open(`${newRecipe.link}`));
        });
        newRecipeDiv.addEventListener('dragstart',()=> {
          newRecipeDiv.classList.add('dragging');
          draggingElementTitle = newRecipeDiv.getAttribute('title');
          draggingElementImage = newRecipeDiv.getAttribute('image');
          draggingElementCalories = newRecipeDiv.getAttribute('calories');
          draggingElementLink = newRecipeDiv.getAttribute('link');
          draggingElements = [draggingElementTitle, draggingElementCalories, draggingElementImage, draggingElementLink]
        });
        newRecipeDiv.addEventListener('dragend',()=> {
          newRecipeDiv.classList.remove('dragging');
        });
        lowest.addEventListener('click', ()=> {
          recipeList.sort((a,b)=> {
            return a.calories - b.calories;
          })
          recipes.innerHTML = '';
          for (i = 0; i < recipeList.length; i++) {
            const lowestRecipeDiv = document.createElement('div');
            lowestRecipeDiv.innerHTML = `
            <img class='image' src=${recipeList[i].image}>
            <h3 class='title'>${recipeList[i].title}</h3>
            <p class='calories'>Calories: ${recipeList[i].calories}</p>
            <button class='${newRecipe.id}'>+</button>`;
            recipes.appendChild(lowestRecipeDiv);
          }
        });
        highest.addEventListener('click', ()=> {
          recipeList.sort((a,b)=> {
            return b.calories - a.calories;
          })
          recipes.innerHTML = '';
          for (i = 0; i < recipeList.length; i++) {
            const highestRecipeDiv = document.createElement('div');
            highestRecipeDiv.innerHTML = `
            <img class='image' src=${recipeList[i].image}>
            <h3 class='title'>${recipeList[i].title}</h3>
            <p class='calories'>Calories: ${recipeList[i].calories}</p>
            <button class='${newRecipe.id}'>+</button>`;
            recipes.appendChild(highestRecipeDiv);
          }
        });
      });
    });
});

savedButton.addEventListener('dragover', (e)=> {
  e.preventDefault();
});
savedButton.addEventListener('dragenter', ()=> {
  savedButton.style.backgroundColor = 'red';
});
savedButton.addEventListener('dragleave', ()=> {
  savedButton.style.backgroundColor = 'transparent';
});
savedButton.addEventListener('drop', ()=> {
  savedButton.style.backgroundColor = 'transparent';
  savedRecipes.push(draggingElements);
});
savedButton.addEventListener('click', ()=> {
  recipes.innerHTML = ''
  savedRecipes.forEach((recipe)=> {
    const savedElements = document.createElement('div');
    savedElements.innerHTML = `
    <img class='image' src=${recipe[2]}>
    <h3 class='title'>${recipe[0]}</h3>
    <p class='calories'>Calories: ${recipe[1]}</p>
    <a href=${recipe[3]}>Link</a>
    `;
    recipes.appendChild(savedElements);
  })
})
