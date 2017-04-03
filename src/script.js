var correctColor;
var colorSet;
var gameMode = 6;

var square = document.querySelectorAll('.square');
var headerRgb = document.querySelector('.header__rgb');
var headerTitle = document.querySelector('.header__title');
var buttonNew = document.querySelector('.button__new');
var navMessage = document.querySelector('.nav__message');
var buttonHard = document.querySelector('.button__hard');
var buttonEasy = document.querySelector('.button__easy');

init();

function init() {
  reset();
  setupSquare();
  setupButtons();
}

function reset() {
  var randomNum;
  colorSet = getColorSet(gameMode);
  randomNum = getRandom(0, colorSet.length - 1);
  correctColor = colorSet[randomNum];
  headerTitle.removeAttribute('style');
  headerRgb.textContent = correctColor;
  buttonNew.textContent = 'New colors';
  navMessage.textContent = '';
  resetSquare();
}

function resetSquare() {
  for (var i = 0; i < square.length; i++) {
    if (colorSet[i]) {
      square[i].classList.remove('square_hide');
      square[i].style.background = colorSet[i];   
    } else {
      square[i].classList.add('square_hide');
    }
  }
}

function setupSquare() {
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function() {
      if (this.style.background === correctColor) {
        winGame();
      } else {
        this.removeAttribute('style');
        navMessage.textContent = 'Try again';
      }
    });
  }
}

function winGame() {
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = correctColor;
  }
  headerTitle.style.background = correctColor;
  buttonNew.textContent = 'Play again?';
  navMessage.textContent = 'Correct!';
}

function setupButtons() {
  buttonNew.addEventListener('click', function() {
    reset();
  });
  buttonHard.addEventListener('click', function() {
    gameMode = 6;
    reset();
  });
  buttonEasy.addEventListener('click', function() {
    gameMode = 3;
    reset();
  });
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