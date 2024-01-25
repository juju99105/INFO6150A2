function init1() {
   const number1 = parseFloat(window.prompt('Please enter your first number'));
   const number2 = parseFloat(window.prompt('Please enter your second number'));
   const sum = number1 + number2;
   const newParagraph = document.createElement('p');
   const newContent = document.createTextNode(`${sum}`);
   newParagraph.appendChild(newContent);
   const parent = document.getElementById('dynamicadd');
   parent.appendChild(newParagraph);
}

function init2() {
   const number1 = parseFloat(window.prompt('Please enter your first number'));
   const number2 = parseFloat(window.prompt('Please enter your second number'));
   const multiplication = number1 * number2;
   const newParagraph = document.createElement('p');
   const newContent = document.createTextNode(`${multiplication}`);
   newParagraph.appendChild(newContent);
   const parent = document.getElementById('dynamicmultiply');
   parent.appendChild(newParagraph);
}