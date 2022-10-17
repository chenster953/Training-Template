const chest = document.querySelector(".chest");
const back = document.querySelector(".back");
const arms = document.querySelector(".arms");
const shoulders = document.querySelector(".shoulders");
const legs = document.querySelector(".legs");
const abs = document.querySelector(".abs");
const exerciseList = document.querySelector(".exerciselist");

const chestExercises = ['Flat Bench Press', 'Incline Bench Press', 'Cable Flys', 'Dips', 'Flat Dumbbell Press', 'Incline Dumbbell Press', 'Machine Fly', 'Machine Press', ];
const backExercises = ['One-Arm Dumbbell Row', 'Bent Over Row', 'Pull Down', 'Seated Machine Row', 'T-Bar Row', 'Meadows Row', 'Lat Prayers', 'Dumbbell Shrugs'];
const armsExercises = ['Dumbbell Curl', 'Barbell Curl', 'EZ-Bar Curl', 'Cable Curl', 'Preacher Curl', 'Dumbbell Overhead Extensions', 'EZ-Bar SkullCrushers', 'Dumbbell SkullCrushers', 'Dips', 'Cable Pushdown', 'Close Grip Bench Press', ]
const shouldersExercises = ['Side Lateral Raise', 'Barbell Overhead Press', 'Dumbbell Shoulder Press', 'Arnold Press', 'Dumbbell Reverse Flys', 'Machine Rear Delt Flys', 'Cable Lateral Raise', 'Face Pulls'];
const legsExercises = ['Barbell Squats', 'Deadlifts', 'Romanian Deadlifts', 'Barbell Front Squats', 'Leg Press', 'Leg Curl Machines', 'Calf Machines', 'Quad Extension Machine', 'Goblet Squat', 'Hip Thrusts', ];
const absExercises = ['Machine Ab Curls', 'Cable Ab Curls', 'Weighted Crunches', 'Weighted Decline Crunches'];

const chestExercisesNoEquiptment = ['Pushups', 'Incline Pushups', 'Decline Pushups', 'Weighted Pushups'];
const backExercisesNoEquiptment = ['Pullups', 'Assisted Pullups', 'Weighted Pullups', 'Inverted Row', ];
const armsExercisesNoEquiptment = ['Chinups', 'Weighted Chinups', 'Diamond Pushups', 'Inverted SkullCrushers'];
const shouldersExercisesNoEquiptment = ['Pike Pushups', 'Handstand Pushups', 'Wall Walks', 'Steep Decline Pushups', 'Shoulder Taps'];
const legsExercisesNoEquiptment = ['Squats', 'Weighted Squats', 'Bulgarian Split Squats', 'Calf Raises', 'Nordic Hamstring Curls'];
const absExercisesNoEquiptment = ['Crunches', 'Heel Taps', 'Plank', 'Mountain Climbers', 'Leg Raises', 'Bicycle Crunches', 'Leg Circles', 'Russian Twist']; 

const muscleGroups = [chest, back, arms, shoulders, legs, abs];

chest.addEventListener("click", ()=> {
  exerciseList.classList.add('active');
  exerciseList.innerHTML = '';
  chestExercises.forEach((exercise)=> {
    let newExercise = document.createElement("button");
    newExercise.classList.add('newexercise');
    newExercise.setAttribute('draggable', true);
    newExercise.innerHTML = exercise;
    exerciseList.appendChild(newExercise);
  })
});
