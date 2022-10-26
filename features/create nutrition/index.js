const textbox = document.querySelector('.text');
const submit = document.querySelector('.submit');
submit.addEventListener('click', ()=> {
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=0b67ee8883dc43028b34e96eccabe5e7&query=beef&number=20&minCalories=300&maxCalories=700`)
    .then((res) => res.json())
    .then((data) => console.log(data))
})