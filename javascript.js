var number = 50
setGame();
function setNumber(max, min) {
  number = Math.floor(Math.random() * (parseInt(max) - parseInt(min))) + parseInt(min);
}
function setGame(max = 100, min = 0) {
  var max = max
  var min = min
  document.getElementById('max').innerHTML = parseInt(max);
  document.getElementById('min').innerHTML = parseInt(min);
  setNumber(max, min);
}
function setRange() {
  var maxtext = document.getElementById('set-min-max');
  var mintext = document.getElementById('set-min-max');
  max = "";
  var i;
  for (i = 0; i < maxtext.length -2 ; i++) {
    max += maxtext.elements[i].value;
  }
  min = "";
  var n;
  for (n = 1; n < mintext.length -1 ; n++) {
    min += mintext.elements[n].value;
  }
  setGame(parseInt(max), parseInt(min));
}
document.getElementById("hard-reset").disabled = true;
$(document).ready(function() {
  $('#soft-reset').attr('disabled',true);
  $('#guess').keyup(function(){
    if ($(this).val().length !=0)
      $('#soft-reset').attr('disabled',false);
    else
      $('#soft-reset').attr('disabled',true);
  })
});
function myFunction() {
  var x = document.getElementById('number-guesser');
  var text = "";
  var i;
  for (i = 0; i < x.length -2 ; i++) {
    text += x.elements[i].value;
  }
  document.getElementById('last-guess').innerHTML = text;
  compare(text, number)
  document.getElementById("hard-reset").disabled = false;
}
function compare(a, b) {
  let min = parseInt(document.getElementById('min').innerHTML)
  let max = parseInt(document.getElementById('max').innerHTML)
  if (isNaN(parseInt(a))) {
    alert('Not a Number!')
    document.getElementById('evaluation').innerHTML = 'That is not a number'
  }
  else if (parseInt(a) < min) {
    alert(`Number cannot be less than ${min}`)
  }
  else if (parseInt(a) > max) {
    alert(`Number cannot be above ${max}`)
  }
  else if (parseInt(a) < b) {
    document.getElementById('evaluation').innerHTML = 'That is too low'
  }
  else if (parseInt(a) > b) {
    document.getElementById('evaluation').innerHTML = 'That is too high'
  }
  else {
    document.getElementById('evaluation').innerHTML = 'BOOM!'
    alert('CORRECT! Number and Range has changed!');
    var newmax = max + 10
    var newmin = min - 10
    setGame(newmax, newmin)
  }
}
