const test = () => {
    console.log('burger')
}

setTimeout('test', 5000) // opóźnienie wykonania sie funkcji 

setInterval('test', 1000) // funkcja wykonuje się co sekundę (1000 milisekund)

// strict mode - 'use strict' pisze sie na górze kodu i to znaczy, ''js działaj poprawnie i nie wybaczaj błędów'' 