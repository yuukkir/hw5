let content = document.getElementById("content");

let first = prompt("Enter first integer:");
let second = prompt("Enter second integer:");

let span = document.createElement("span");
span.className = "result";

if (!isNaN(first) && !isNaN(second) && first.indexOf(".") == -1 && second.indexOf(".") == -1) {

   let sum = parseInt(first) + parseInt(second);
   span.innerText = first + " + " + second + " = " + sum;

} else {

   span.innerText = '"' + first + '" or "' + second + '" is not an integer';

}

content.appendChild(span);