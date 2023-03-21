// unshift - dodaje elementy na początku tablicy
// shift - usuwa pierwszy element tablicy 
// push - dodaje elementy na końcu tablicy
// pop - usuwa ostatni element tablicy
// concat - łączenie dwóch tablic

// // function map
// - podobna do pętli, wykonuje jakoś kod na kadym elemencie tablicy
// - w nawiasach podajemy nazwę funkcji, której kod ma się wykonać na elementach tablicy
// - zwraca nową tablicę

// spread operator - dajemy trzy kropki przed nazwą tablicy i wtedy mamy osobne stringi

const drinks = ["pepsi", "kawa", "sok"]
const meals = ["schabowy", "spaghetti", "zupa"]

const menu2 = [...drinks, ...meals];

console.log(menu2);