var correctColor;
var colorSet;
var gameMode = 6;

var square = document.querySelectorAll('.square');
var headerRgb = document.querySelector('.header__rgb');
function init() {
  colorSet = getColorSet(gameMode);

  var randomNum = getRandom(0, colorSet.length - 1);
  correctColor = colorSet[randomNum];
  headerRgb.textContent = correctColor;

  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colorSet[i];
    square[i].textContent = colorSet[i]; //testing
  }
}

function getColorSet(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(getRandomColor());
  }
  return arr;
}

function getRandomColor() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(getRandom(0, 255));
  }
  return 'rgb(' + arr.join(', ') + ')';
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

init();