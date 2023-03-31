const img = document.querySelector('img');

img.setAttribute('src', 'https://unsplash.it/600/400')
img.setAttribute('alt', 'losowy obrazek')
const test = () => console.log('lol')

setTimeout(test, 2000);

const allLiItems = document.querySelectorAll('li');
let number = 1 

// for(let allLiItems of liItems) {
//    allLiItems.textContent = number
//    liItem.dataset.id = number
//    number++ 
// }

for (let i = 0; i <= liItems.length; i++) {
    liItems[i].textContent = number
    liItems[i].dataset.id = number
    number++
}

const thirdLi = document.querySelector('[data-id="3"]');
console.log(thirdLi.closest('wrapper'));

