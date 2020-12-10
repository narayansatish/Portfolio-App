"use strict";

/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it wold in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/
// Write your code here 👇

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
function clickdice() {
  var ele = document.querySelector(".dice"),
      node = document.createElement("DIV");

  while (ele.firstChild) {
    ele.removeChild(ele.lastChild);
  }

  document.querySelectorAll('.dot').forEach(function (e) {
    return e.remove();
  });
  node.className = "dot";
  var display = Math.floor(Math.random() * (7 - 1)) + 1;
  console.log(ele);

  for (var i = 1; i <= display; i++) {
    ele.appendChild(node); // console.log(ele);
  }
}

var el = document.querySelector(".dice");
el.addEventListener("click", clickdice);