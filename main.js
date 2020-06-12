//create array of pie objects
const pies = [
  {
    type: "cherry",
    sweetnessLevel: "semi-sweet",
    instructor: "Theresa",

}, 
{
  type: "apple",
    sweetnessLevel: "sweet",
    instructor: "Jacob",
},
{
  type: "chocolate",
    sweetnessLevel: "very sweet",
    instructor: "Abbey",
}]

// add a print to DOM function 

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

//add function to create pie cards (argument of selected pies required)
const buildPies = (pies) => {
  let domstring = '';
  for(let i = 0; i < pies.length; i++) {
    domstring += `<div class="individualPie">`
    domstring += `<h3>${pies[i].type}</h3>`
    domstring += `<h3>${pies[i].sweetnessLevel}</h3>`
    domstring += `<h3>${pies[i].instructor}</h3>`
    domstring += `</div>`
  }
 
  printToDom('pies', domstring)
}


  // loop over pies array
  // if values of instructor key is the same as buttonId - keep that object
  // once we have all the pies for that instructor 
const buttonClick = (e) => {
  const buttonId = e.target.id;
  //console.log('you clicked a button', e.target.id);
  const selectedPies = [];
  for (let i = 0; i < pies.length; i++) {
    if (pies[i].instructor === buttonId) {
      selectedPies.push(pies[i]);
    }
  }

  if (buttonId === 'All') {
    buildPies(pies);
  } else {
    console.log("selected pie")
    buildPies(selectedPies);
  }
};


//function to add event listeners to html
const buttonEvents = () => {
  document.getElementById('Theresa').addEventListener('click', buttonClick);
  document.getElementById('Jacob').addEventListener('click', buttonClick);
  document.getElementById('Abbey').addEventListener('click', buttonClick);
  document.getElementById('All').addEventListener('click', buttonClick);
};

const init = () => {
  buttonEvents();
};

init();
