var correctColor;
var colorSet;
var gameMode = 6;

var square = document.querySelectorAll('.square');
var headerRgb = document.querySelector('.header__rgb');
var headerTitle = document.querySelector('.header__title');
var buttonNew = document.querySelector('.button__new');
var navMessage = document.querySelector('.nav__message');

function init() {
  reset();

  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function() {
      if (this.style.background === correctColor) {
        for (var i = 0; i < square.length; i++) {
          square[i].style.background = correctColor;
        }
        headerTitle.style.background = correctColor;
        buttonNew.textContent = "Play again?";
        navMessage.textContent = "Correct!";
      } else {
        this.removeAttribute('style');
        navMessage.textContent = "Try again";
      }
    });
  }

  buttonNew.addEventListener('click', function() {
    reset();
  });
}

function reset() {
  colorSet = getColorSet(gameMode);
  var randomNum = getRandom(0, colorSet.length - 1);
  correctColor = colorSet[randomNum];
  headerRgb.textContent = correctColor;
  headerTitle.removeAttribute('style');
  buttonNew.textContent = "New colors"
  navMessage.textContent = "";
  
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