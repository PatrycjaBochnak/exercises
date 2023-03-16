// const x = 50;
// const y = 30;

// if (x > y) {
//     console.log(`${x} jest większe od ${y}`)
// };

const color = blue;
const newColor = green;

if (color === newColor) {
    console.log("Kolory się zgadzają")
} else {
    console.log("Kolory się nie zgadzają")
};

const x = 100;
const y = 50;

if (x > y) {
    console.log("x jest większy")
} else if (x == y){
    console.log("x jest równy")
} else {
    console.log ("x jest mniejszy")
}

const promo = "20%";

switch (promo) {
    case "20%":
        console.log(`Dziś mamy ${promo} zniki!`);
        break;
    case "30%":
    case "10%":
        console.log(`Wcześniej było 10% i 30% zniki`);
        break;
    default:
        console.log("Nie istnieje")
}