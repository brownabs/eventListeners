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
//add function to create pie cards
const buildPies = () => {
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

buildPies();
