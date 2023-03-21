// unshift - dodaje elementy na początku tablicy
// shift - usuwa pierwszy element tablicy 
// push - dodaje elementy na końcu tablicy
// pop - usuwa ostatni element tablicy
// concat - łączenie dwóch tablic
// slice - wytnij tablicę od podanego argumentu i wyświetl ją (tą wyciętą część)
// splice - wytnij wartości i wstaw (opcjonalnie) inną
// filter - filtruje tablice i wypisuje tylko te w tablicy, które spełniają warunek
// callback - funkcja, którą przekazujemy jako argument do innej funkcji

// // function map
// - podobna do pętli, wykonuje jakoś kod na kadym elemencie tablicy
// - w nawiasach podajemy nazwę funkcji, której kod ma się wykonać na elementach tablicy
// - zwraca nową tablicę

// spread operator - dajemy trzy kropki przed nazwą tablicy i wtedy mamy osobne stringi

const drinks = ["pepsi", "kawa", "sok"]
const meals = ["schabowy", "spaghetti", "zupa"]

const menu2 = [...drinks, ...meals];

console.log(menu2);

// metoda filter 

const numbers = [0, 23, 48, 175, 2, 34, 11]

function number(x) {
    return x % 2 === 0
}

console.log(numbers.filter(number));

