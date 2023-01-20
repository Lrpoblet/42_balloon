const balloon = document.querySelector (".js-balloon");
const text = document.querySelector (".js-text");

let counter = 0;
const px = 'px'
let div;

function grow () {
  div = 200;
  div = div + counter*10
  balloon.style.height = div + px;
  balloon.style.width = div + px;

  // if (div <= 420) {
  //   console.log('click');
  //   div = div + 10;
  //   balloon.style.height = div + px;
  //   balloon.style.width = div + px;
  // }
 }

function moves() {

    counter++;
    if (counter === 1 || counter === 4 || counter === 7 || counter === 10 || counter === 13 || counter === 16 || counter === 19 ) {
      text.classList.add("hidden");
      balloon.classList.remove("hidden");
      grow()
      red()
    } else if (counter === 2 || counter === 5 || counter === 8 || counter === 11 || counter === 14 || counter === 17 || counter === 20 ) {
      balloon.innerHTML = ''
      grow()
      green()
    } else if (counter === 3 || counter === 6 || counter === 9 || counter === 12 || counter === 15 || counter === 18 || counter === 21) {
      grow()
      blue()
    } else if (counter === 22) {
      div = 200;
      red();
      balloon.style.height = div + px;
      balloon.style.width = div + px;
      text.classList.remove("hidden");
      balloon.classList.add("hidden");
      counter = 0;
    }
}

function red() {
    balloon.classList.add("red");
    balloon.classList.remove("blue");
    balloon.classList.remove("green")
}
function green() {
  balloon.classList.add("green");
  balloon.classList.remove("red");
  balloon.classList.remove("blue")
}

function blue() {
  balloon.classList.add("blue");
  balloon.classList.remove("red");
  balloon.classList.remove("green")
}

function onClick() {
  moves() 
}

function onMouseOver() {
  if (div > 200 && balloon.classList.contains("red")) {
    div = div - 5;
    balloon.style.height = div + px;
    balloon.style.width = div + px;
    balloon.classList.remove("red");
    balloon.classList.add("blue");
  } else if (div > 200 && balloon.classList.contains("green")) {
    div = div - 5;
    balloon.style.height = div + px;
    balloon.style.width = div + px;
    balloon.classList.remove("green");
    balloon.classList.add("red");
  } else if (div > 200 && balloon.classList.contains("blue")) {
    div = div - 5;
    balloon.style.height = div + px;
    balloon.style.width = div + px;
    balloon.classList.remove("blue");
    balloon.classList.add("green");
  }
}

balloon.addEventListener('click', onClick);
balloon.addEventListener('mouseout', onMouseOver);
text.addEventListener('click', onClick);