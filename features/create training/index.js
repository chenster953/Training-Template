// MUSCLE GROUP BUTTONS
const chest = document.querySelector(".chest");
const back = document.querySelector(".back");
const arms = document.querySelector(".arms");
const shoulders = document.querySelector(".shoulders");
const legs = document.querySelector(".legs");
const abs = document.querySelector(".abs");
const exerciseList = document.querySelector(".exerciselist");
// WEEKDAY TITLE SELECTORS
const sunday = document.querySelector(".sunday");
const monday = document.querySelector(".monday");
const tuesday = document.querySelector(".tuesday");
const wednesday = document.querySelector(".wednesday");
const thursday = document.querySelector(".thursday");
const friday = document.querySelector(".friday");
const saturday = document.querySelector(".saturday");
// WEEKDAY LIST SELECTORS
const sundaylist = document.querySelector(".sundaylist");
const mondaylist = document.querySelector(".mondaylist");
const tuesdaylist = document.querySelector(".tuesdaylist");
const wednesdaylist = document.querySelector(".wednesdaylist");
const thursdaylist = document.querySelector(".thursdaylist");
const fridaylist = document.querySelector(".fridaylist");
const saturdaylist = document.querySelector(".saturdaylist");
// HARD CODED EXERCISES :(
const chestExercises = ['Flat Bench Press', 'Incline Bench Press', 'Cable Flys', 'Dips', 'Flat Dumbbell Press', 'Incline Dumbbell Press', 'Machine Fly', 'Machine Press', ];
const backExercises = ['One-Arm Dumbbell Row', 'Bent Over Row', 'Pull Down', 'Seated Machine Row', 'T-Bar Row', 'Meadows Row', 'Lat Prayers', 'Dumbbell Shrugs'];
const armsExercises = ['Dumbbell Curl', 'Barbell Curl', 'EZ-Bar Curl', 'Cable Curl', 'Preacher Curl', 'Dumbbell Overhead Extensions', 'EZ-Bar SkullCrushers', 'Dumbbell SkullCrushers', 'Dips', 'Cable Pushdown', 'Close Grip Bench Press', ]
const shouldersExercises = ['Side Lateral Raise', 'Barbell Overhead Press', 'Dumbbell Shoulder Press', 'Arnold Press', 'Dumbbell Reverse Flys', 'Machine Rear Delt Flys', 'Cable Lateral Raise', 'Face Pulls'];
const legsExercises = ['Barbell Squats', 'Deadlifts', 'Romanian Deadlifts', 'Barbell Front Squats', 'Leg Press', 'Leg Curl Machines', 'Calf Machines', 'Quad Extension Machine', 'Goblet Squat', 'Hip Thrusts', ];
const absExercises = ['Machine Ab Curls', 'Cable Ab Curls', 'Weighted Crunches', 'Weighted Decline Crunches'];
// HARD CODED EXERCISES PT2 :(
const chestExercisesNoEquiptment = ['Pushups', 'Incline Pushups', 'Decline Pushups', 'Weighted Pushups'];
const backExercisesNoEquiptment = ['Pullups', 'Assisted Pullups', 'Weighted Pullups', 'Inverted Row', ];
const armsExercisesNoEquiptment = ['Chinups', 'Weighted Chinups', 'Diamond Pushups', 'Inverted SkullCrushers'];
const shouldersExercisesNoEquiptment = ['Pike Pushups', 'Handstand Pushups', 'Wall Walks', 'Steep Decline Pushups', 'Shoulder Taps'];
const legsExercisesNoEquiptment = ['Squats', 'Weighted Squats', 'Bulgarian Split Squats', 'Calf Raises', 'Nordic Hamstring Curls'];
const absExercisesNoEquiptment = ['Crunches', 'Heel Taps', 'Plank', 'Mountain Climbers', 'Leg Raises', 'Bicycle Crunches', 'Leg Circles', 'Russian Twist']; 
// GROUP VARIABLES TO RUN FOREACH
const muscleGroups = [chest, back, arms, shoulders, legs, abs];
const days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
const daysList = [sundaylist, mondaylist, tuesdaylist, wednesdaylist, thursdaylist, fridaylist, saturdaylist];

let weeklyChest = 0;
let weeklyBack = 0;
let weeklyArms = 0;
let weeklyShoulders = 0;
let weeklyLegs = 0;
let weeklyAbs = 0;

// RENDER EFFECTIVENESS BAR
const effectivenessBar = document.querySelector('.effectiveness');
let effectiveness = 100;
effectivenessBar.innerHTML = 0 + '%';
effectivenessBar.style.background = 'transparent';

const newExercise = document.querySelector('.newexercise');
const reset = document.querySelector('.reset');
const check = document.querySelector('.check');
// RENDER MUSCLE GROUP BUTTONS
let draggedItem;
muscleGroups.forEach((muscle)=> {
  muscle.addEventListener("click", ()=> {
    exerciseList.classList.add('active');
    exerciseList.innerHTML = '';
    if (muscle.innerHTML.includes('CHEST')) {
      chestExercises.forEach((exercise)=> {
        let newExercise = document.createElement("button");
        newExercise.classList.add('newexercise');
        newExercise.setAttribute('draggable', true);
        newExercise.innerHTML = exercise;
        exerciseList.appendChild(newExercise);
        newExercise.addEventListener('dragstart', ()=>{
          newExercise.classList.add('dragging');
          draggedItem = newExercise.innerHTML;
        })
        newExercise.addEventListener('dragend', ()=> {
          newExercise.classList.remove('dragging');
        })
      })
    } else if (muscle.innerHTML.includes('BACK')) {
      backExercises.forEach((exercise)=> {
        let newExercise = document.createElement("button");
        newExercise.classList.add('newexercise');
        newExercise.setAttribute('draggable', true);
        newExercise.innerHTML = exercise;
        exerciseList.appendChild(newExercise);
        newExercise.addEventListener('dragstart', ()=>{
          newExercise.classList.add('dragging');
          draggedItem = newExercise.innerHTML;
        })
        newExercise.addEventListener('dragend', ()=> {
          newExercise.classList.remove('dragging');
        })
      })
    } else if (muscle.innerHTML.includes('ARMS')) {
      armsExercises.forEach((exercise)=> {
        let newExercise = document.createElement("button");
        newExercise.classList.add('newexercise');
        newExercise.setAttribute('draggable', true);
        newExercise.innerHTML = exercise;
        exerciseList.appendChild(newExercise);
        newExercise.addEventListener('dragstart', ()=>{
          newExercise.classList.add('dragging');
          draggedItem = newExercise.innerHTML;
        })
        newExercise.addEventListener('dragend', ()=> {
          newExercise.classList.remove('dragging');
        })
      })
    } else if (muscle.innerHTML.includes('SHOULDERS')) {
      shouldersExercises.forEach((exercise)=> {
        let newExercise = document.createElement("button");
        newExercise.classList.add('newexercise');
        newExercise.setAttribute('draggable', true);
        newExercise.innerHTML = exercise;
        exerciseList.appendChild(newExercise);
        newExercise.addEventListener('dragstart', ()=>{
          newExercise.classList.add('dragging');
          draggedItem = newExercise.innerHTML;
        })
        newExercise.addEventListener('dragend', ()=> {
          newExercise.classList.remove('dragging');
        })
      })
    } else if (muscle.innerHTML.includes('LEGS')) {
      legsExercises.forEach((exercise)=> {
        let newExercise = document.createElement("button");
        newExercise.classList.add('newexercise');
        newExercise.setAttribute('draggable', true);
        newExercise.innerHTML = exercise;
        exerciseList.appendChild(newExercise);
        newExercise.addEventListener('dragstart', ()=>{
          newExercise.classList.add('dragging');
          draggedItem = newExercise.innerHTML;
        })
        newExercise.addEventListener('dragend', ()=> {
          newExercise.classList.remove('dragging');
        })
      })
    } else if (muscle.innerHTML.includes('ABS')) {
      absExercises.forEach((exercise)=> {
        let newExercise = document.createElement("button");
        newExercise.classList.add('newexercise');
        newExercise.setAttribute('draggable', true);
        newExercise.innerHTML = exercise;
        exerciseList.appendChild(newExercise);
        newExercise.addEventListener('dragstart', ()=>{
          newExercise.classList.add('dragging');
          draggedItem = newExercise.innerHTML;
        })
        newExercise.addEventListener('dragend', ()=> {
          newExercise.classList.remove('dragging');
        })
        })
      }});
    }
  );
weekdayEventListener();
// DRAG AND DROP LOGIC
function weekdayEventListener() {
  days.forEach((day)=> {
    day.addEventListener('dragover', (e)=> {
    e.preventDefault();
  })
  day.addEventListener('dragenter', (e)=> {
    day.style.backgroundColor = 'red'
  })
  day.addEventListener('dragleave', (e)=> {
    day.style.backgroundColor = 'transparent';
  })
  day.addEventListener('drop',()=> {
    newel = document.createElement("div");
    if (chestExercises.includes(draggedItem)) {
      newel.innerHTML = draggedItem + "<br/>" + "Sets: " + "<input class='chestsets' type=number min='1' max='5'/>"
    }
    if (backExercises.includes(draggedItem)) {
      newel.innerHTML = draggedItem + "<br/>" + "Sets: " + "<input class='backsets' type=number min='1' max='5'/>"
    }
    if (armsExercises.includes(draggedItem)) {
      newel.innerHTML = draggedItem + "<br/>" + "Sets: " + "<input class='armssets' type=number min='1' max='5'/>"
    }
    if (shouldersExercises.includes(draggedItem)) {
      newel.innerHTML = draggedItem + "<br/>" + "Sets: " + "<input class='shoulderssets' type=number min='1' max='5'/>"
    }
    if (legsExercises.includes(draggedItem)) {
      newel.innerHTML = draggedItem + "<br/>" + "Sets: " + "<input class='legssets' type=number min='1' max='5'/>"
    }
    if (absExercises.includes(draggedItem)) {
      newel.innerHTML = draggedItem + "<br/>" + "Sets: " + "<input class='abssets' type=number min='1' max='5'/>"
    }
    day.style.backgroundColor = 'transparent';
    if (day.innerHTML == 'SUNDAY') {
      sundaylist.appendChild(newel);
    } else if (day.innerHTML == 'MONDAY') {
      mondaylist.appendChild(newel);
    } else if (day.innerHTML == 'TUESDAY') {
      tuesdaylist.appendChild(newel);
    } else if (day.innerHTML == 'WEDNESDAY') {
      wednesdaylist.appendChild(newel);
    } else if (day.innerHTML == 'THURSDAY') {
      thursdaylist.appendChild(newel);
    } else if (day.innerHTML == 'FRIDAY') {
      fridaylist.appendChild(newel);
    } else if (day.innerHTML == 'SATURDAY') {
      saturdaylist.appendChild(newel);
    }
  })
  })
}
// RESET LOGIC
reset.addEventListener('click', ()=> {
  daysList.forEach((day)=> {
    day.innerHTML = '';
  });
  effectiveness = 100;
  effectivenessBar.innerHTML = 0 + '%';
  effectivenessBar.style.background = `transparent`;
})
// CHECK LOGIC
check.addEventListener('click', ()=> {
  resetSets();
  const chestSets = document.querySelectorAll('.chestsets');
  const backSets = document.querySelectorAll('.backsets');
  const armsSets = document.querySelectorAll('.armssets');
  const shouldersSets = document.querySelectorAll('.shoulderssets');
  const legsSets = document.querySelectorAll('.legssets');
  const absSets = document.querySelectorAll('.abssets');
  chestSets.forEach((set)=> {
    weeklyChest += parseInt(set.value);
  });
  backSets.forEach((set)=> {
    weeklyBack += parseInt(set.value);
  });
  armsSets.forEach((set)=> {
    weeklyArms += parseInt(set.value);
  });
  shouldersSets.forEach((set)=> {
    weeklyShoulders += parseInt(set.value);
  });
  legsSets.forEach((set)=> {
    weeklyLegs += parseInt(set.value);
  });
  absSets.forEach((set)=> {
    weeklyAbs += parseInt(set.value);
  });
  const weeklyVolume = [weeklyChest, weeklyBack, weeklyArms, weeklyShoulders, weeklyLegs, weeklyAbs];
  effectiveness = 100;
  weeklyVolume.forEach((group)=> {
    if (group < 10) {
      effectiveness -= 10;
    } else if (group > 20) {
      effectiveness -= 10;
    } else if (isNaN(group)) {
      console.log('nan')
      effectiveness -= 10;
    }
  });
  effectivenessBar.innerHTML = effectiveness + '%';
  effectivenessBar.style.background = `linear-gradient(to right, green ${effectiveness}%, transparent)`;
  if (effectiveness == 40) {
    effectivenessBar.innerHTML = '0%';
    effectivenessBar.style.background = 'transparent'
  }
});
// reset sets
function resetSets() {
  weeklyChest = 0;
  weeklyBack = 0;
  weeklyArms = 0;
  weeklyShoulders = 0;
  weeklyLegs = 0;
  weeklyAbs = 0;
}