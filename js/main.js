const frases = require('./data');
let btn = document.querySelector('#btnSearch');

function gerarFrase3() {
    let selectItem = document.querySelector('#humor');
    let retornoFrase = document.querySelector('#retornoFrase');
    let lengthArrayObj = 0;
    let itemPosition = 0;
    let frase = '';

    switch (selectItem.value) {
        case 'esperanca':
            lengthArrayObj =  frases.esperanca.length - 1;
            itemPosition = Math.floor(Math.random() * (lengthArrayObj - 0) ) + 0;
            frase = frases.esperanca[itemPosition].frase;
            break;
        case 'incerteza':
            lengthArrayObj =  frases.incerteza.length - 1;
            itemPosition = Math.floor(Math.random() * (lengthArrayObj - 0) ) + 0;
            frase = frases.incerteza[itemPosition].frase;
            break;
        case 'medo':
            lengthArrayObj =  frases.medo.length - 1;
            itemPosition = Math.floor(Math.random() * (lengthArrayObj - 0) ) + 0;
            frase = frases.medo[itemPosition].frase;
            break;
        case 'mudanca':
            lengthArrayObj =  frases.mudanca.length - 1;
            itemPosition = Math.floor(Math.random() * (lengthArrayObj - 0) ) + 0;
            frase = frases.mudanca[itemPosition].frase;
            break;
        default:
            break;
    }
    retornoFrase.innerHTML = frase;
}

btn.addEventListener('click', gerarFrase3(selectItem.value));

// function gerarFrase(arrayObj) {
//     let retornoFrase = document.querySelector('#retornoFrase');
//     let frase = '';
//     let fraseLength =  frases.arrayObj.length    
//     let lengthArrayObj =  fraseLength - 1;
//     let itemPosition = Math.floor(Math.random() * (lengthArrayObj - 0) ) + 0;
//     frase = frases.arrayObj[itemPosition].frase;
//     retornoFrase.innerHTML = frase.value;      
// }

// btn.addEventListener('click', gerarFrase(selectItem.value));

// console.log(frases.incerteza);


// function gerarFrase2(arrayObj) {
//     let arrayName = arrayObj;
//     let fraseLength =  frases.arrayName;    
    // let lengthArrayObj =  fraseLength - 1;
    // let itemPosition = Math.floor(Math.random() * (lengthArrayObj - 0) ) + 0;
    // frase = frases.arrayObj[itemPosition].frase;
//     console.log(fraseLength);
// }

// gerarFrase2('medo');

