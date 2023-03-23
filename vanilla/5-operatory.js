let x = 10;
let y = 5;

console.log(x);

x = x + y;

console.log(x);

x += y;

console.log(x);

const pass = "hhufdhsfds";

if (pass.length > 10 && pass.includes("!")) {
  console.log("Masz rewelacyjne hasło");
} else if (pass.length > 10) {
  console.log("Masz dobre hasło");
} else {
  console.log("Masz za krótkie hasło");
}
