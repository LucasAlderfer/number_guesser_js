//Unless otherwise noted (in two instances) I use var over let or const for consistency, I wanted to learn what to use by seeing when var did not work
//I believe that I solely use ES5, I was not able to find any indication that any of my code was in ES6, but as I did mostly Google what to do from what it would be called in Ruby, some ES6 may have snuck in unbeknownst to me.
var number = 50
//Setting up a variable to a default number, I don't think it needs to have a value, I use var because the number needs to be able to change
setGame();
//I run setGame here without arguments as a default on the page as I have given a default range for it to run with
function setNumber(max, min) {
  //I establish the function called setNumber and tell it to expect two arguments to use as the max and min values of the range within which the number should be
  number = Math.floor(Math.random() * (parseInt(max) - parseInt(min))) + parseInt(min);
  //I change the variable number which I established outside the function to be a random number within the range defined by the arguments
}
function setGame(max = 100, min = 0) {
  //I establish a function called setGame with a default range that could also take max and min arguments for a custom range
  var max = max
  //I establish a variable called max, and set it equal to the argument max
  var min = min
  //I establish a variable called min, and set it equal to the argument min
  document.getElementById('max').innerHTML = parseInt(max);
  //I display in the HTML element with ID 'max' the number value stored in max, I parseInt in case something other than an Int was entered into the range field
  document.getElementById('min').innerHTML = parseInt(min);
  //I display in the HTML element with ID 'min' the number value stored in min, I parseInt in case something other than an Int was entered into the range field
  setNumber(max, min);
  //I run the function setNumber which I already established with the values of max and min that were entered here to reset the number that will be being guessed to ensure that it is within the range
}
function setRange() {
  //I establish a new function called setRange
  var maxtext = document.getElementById('set-min-max');
  var mintext = document.getElementById('set-min-max');
  //Each of the two lines above establishes a variable that is set equal to the value current stored in an HTML element with a specific ID
  max = "";
  //I establish an empty string called max
  var i;
  //I establish a variable called i
  for (i = 0; i < maxtext.length -2 ; i++) {
    //I create a loop that continues as long as i is less than 2 less than the length of the variable maxtext and starts with i at 0 and adds 1 to i each time it loops
    max += maxtext.elements[i].value;
    //Here I add to the empty string max the value of the element of maxtext that is at position i
  }
  min = "";
  //I establish an empty string called min
  var n;
  //I establish a variable called n
  for (n = 1; n < mintext.length -1 ; n++) {
    //I create a loop that continues as long as n is less than 1 less than the length of the variable mintext and starts with n at 1 and adds 1 to n each time it loops
    min += mintext.elements[n].value;
    //Here I add to the empty string min the value of the element of mintext that is at position n
  }
  setGame(parseInt(max), parseInt(min));
  //I now run the function setGame with the new max and min of the range passed in as arguments
}
document.getElementById("hard-reset").disabled = true;
//I begin the page with the HTML element that has an ID of 'hard-reset' with its attribute disabled set to true
$(document).ready(function() {
  //I begin a jquery function that begins running when the page has loaded
  $('#soft-reset').attr('disabled',true);
  //I set the HTML element with ID soft-reset to have its attribute disabled set to true
  $('#guess').keyup(function(){
    //I establish a new function in jquery that runs each time a keypress occurs in the the HTML field that has an id of guess.
    if ($(this).val().length !=0)
    //If the value in the element with the id of guess (currently 'this') has a length other than 0, the following occurs
      $('#soft-reset').attr('disabled',false);
      //The HTML element with an ID of soft-reset has its attribute called disabled set to false
    else
      $('#soft-reset').attr('disabled',true);
      //The HTML element with an ID of soft-reset has its attribute called disabled set to true in the event that the value of the fields length is not 0.
  })
});
function myFunction() {
  //I establish a function
  var x = document.getElementById('number-guesser');
  //I set a variable called x to the value in the HTML element with an id of number-guesser
  var text = "";
  //I establish a variable called text to an empty string
  var i;
  //I establish a variable called i
  for (i = 0; i < x.length -2 ; i++) {
    //I create a loop that increments i from 0 up by one each time it loops until i is 2 less than the length of x
    text += x.elements[i].value;
    //For each on of those loops, I add the value of the elements in x at that position to the variable text
  }
  document.getElementById('last-guess').innerHTML = text;
  //I place the variable text as the value of the HTML element with the id 'last-guess'
  compare(text, number)
  //I run the compare function below with the arguments of the text variable from above and the number variable that exists outside the functions and was set when the page loaded and ran the default setGame or when the range was changed and setGame was run with parameters
  document.getElementById("hard-reset").disabled = false;
  //Now that a comparison has been made and there is also a number, the HTML element with ID 'hard-reset' has its attribute disbaled set to false so the game can now be reset
}
function compare(a, b) {
  //I establish a function called compare that takes two arguments, which I expect to both be numbers
  let min = parseInt(document.getElementById('min').innerHTML)
  //I set min equal to the integer in the HTML element with ID 'min', I don't know why it had to be 'let', var wasn't working
  let max = parseInt(document.getElementById('max').innerHTML)
  //I set max equal to the integer in the HTML element with ID 'max', I don't know why it had to be 'let', var wasn't working
  if (isNaN(parseInt(a))) {
    //I begin a conditional for what to do in this function, the first of which checks if the first argument 'a' is not a number
    alert('Not a Number!')
    //I send an alert if it isnt a number
    document.getElementById('evaluation').innerHTML = 'That is not a number'
    //I place as a value in the HTML element with id 'evaluation' the string 'That is not a number'
  }
  else if (parseInt(a) < min) {
    //In the case that it is a number I then check if that number is below the minimum of the range
    alert(`Number cannot be less than ${min}`)
    //If it is I send an alert stating such
  }
  else if (parseInt(a) > max) {
    //I also check if the number is above the max of the range
    alert(`Number cannot be above ${max}`)
    //If it is I send an alert stating such
  }
  else if (parseInt(a) < b) {
    //I now check if the guess is below the number being guessed
    document.getElementById('evaluation').innerHTML = 'That is too low'
    //If it is I place in 'evaluation' the string 'That is too low'
  }
  else if (parseInt(a) > b) {
    //I now check if the guess is above the number being guessed
    document.getElementById('evaluation').innerHTML = 'That is too high'
    //If it is I place in 'evaluation' the string 'That is too high'
  }
  else {
    //I create a win condition for if it is a number, in the range and equal to the number being guessed
    document.getElementById('evaluation').innerHTML = 'BOOM!'
    //I place in 'evaluation' the string 'BOOM!'
    alert('CORRECT! Number and Range has changed!');
    //I alert the user that they were correct and as such, the number being guess and the range in which they are guessing have changed
    var newmax = max + 10
    //I set a variable equal to the previous max of the range plus 10
    var newmin = min - 10
    //I set a variable equal to the previous min of the range miuns 10
    setGame(newmax, newmin)
    //I run setGame again so that the user can continue to play, now with a number number in a new range, and that function will update the fields showing the range
  }
}
