const heading = document.querySelector("h1");
const p = document.querySelectorAll("p");
p.push;
const test1 = document.querySelector(".test");
const pInsideDiv = document.querySelector("#test");
const ulList = document.createElement('ul')
const liItem = document.createElement("li");
liItem.textContent = "cześć";
ulList.body.appendChild(liItem)

console.log(document.body);

const div = document.querySelector('div');
const pDiv = document.createElement('p');
div.appendChild(pDiv);

// appendChild działa tylko dla jednego argumentu, nie da się tam dodawać równie tekstu

div.append(p, 'cześć')

// append jest bardziej uniwersalny, mozna dodac kilka elementów oraz tekst

const btn = document.querySelector('button');

console.log(btn.outerHTML); 
btn.innerHTML = ""; // w środku co jest w przycisku ma być puste
btn.innerText // tekst w przycisku
// textContent od innerText rózni się tym, innerText zwraca tylko tekst, a textContent on zignorował style i zwrócił wszystko (style, ukryte rzeczy itd)

// removeChild - usuwanie dziecka, w nawiasach podajemy co chcemy usunąć odwołujemy się do rodzica i usuwamy element z nawiasów div.removeChild('p') - usuwa p z div
// remove - usuwanie

const btn1 = document.querySelector('btn-1');
const btn2 = document.querySelector('btn-2');
const btn3 = document.querySelector('btn-3');

btn1.addEventListener('click', function(){
    console.log('kliknięto mnie')
})

btn2.addEventListener('mouseover', () => console.log('najechano na mnie'));

const test = () => {
    console.log('double click');
}

btn3.addEventListener('dblclik', test)

const gold = document.createElement('div');
gold.append(newCircle)
newCircle.classList.add('circle', 'purple')

