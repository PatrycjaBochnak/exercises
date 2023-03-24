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

