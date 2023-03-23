// function hello(name, age) {
//     console.log(`Cześć mam na imię ${x}, i mam ${y} lat`)
// }

// hello("Patrycja", 24);

let score;

function add(x, y) {
  score = x + y;
  score % 2 === 0 ? opt1(score) : opt2(score);
}

function opt1() {
  console.log(`Liczba ${score} jest parzysta`);
}

function opt2() {
  console.log(`Liczba ${score} jest nieparzysta`);
}

add(2, 5);

let celsius;
let temp;

faranheit = (c) => {
  celsius = c;
  temp = celsius * 1.8 + 32;
  console.log(`${c} stopni celsjusza = ${temp} faranheita`);
};

faranheit(20);

const num = 10;

const numbers = [];

for (i = 0; i < num; i++) {
  numbers.push(i);
}

function foo(number) {
  if (number % 3 === 0 && number !== 0) {
    console.log(`${number} jest podzielne przez 3`);
  } else {
    console.log(`${number} nie jest podzielne przez 3`);
  }
}

numbers.forEach(foo);
