var square = document.querySelectorAll('.square');

for (var i = 0; i < square.length; i++) {
  square[i].style.background = getRandomColor();
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