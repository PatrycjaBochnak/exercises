const towns = ["Gdynia", "Sopot", "Gdańsk"];

for (let i = 0; i < towns.length; i++) {
  console.log(`To miasto nazywa się: ${towns[i]}`);
}

let x = 0;

while (x < 10) {
  x = x + 2;
  console.log(x);
}

let i = 20;
do {
  i = i - 3;
} while (i > 0);

console.log(i);

let numbers = [5, 8, 10, 23, 48, 60];

for (let number of numbers) {
  console.log(number / 5);
  if (number % 2 === 0) {
    console.log(`%cLiczba ${number} jest parzysta`, "background.color: gold");
  } else {
    console.log(`Liczba ${number} jest nieparzysta`);
  }
}
