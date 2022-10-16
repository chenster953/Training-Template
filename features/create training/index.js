const chest = document.querySelector(".chest");
const back = document.querySelector(".back");
const arms = document.querySelector(".arms");
const shoulders = document.querySelector(".shoulders");
const legs = document.querySelector(".legs");
const abs = document.querySelector(".abs");

const muscleGroups = [chest, back, arms, shoulders, legs, abs];
muscleGroups.forEach((muscle)=> {
  muscle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
});

