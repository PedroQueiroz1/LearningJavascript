/*
&& -> false && true -> false
|| -> false ||  -> true

FALSY
*false

0
'' "" ``
null / undefined
NaN
*/

// OR 

// retorna a primeira string verdadeira, que existe. -> Pedro
console.log(0 || false || null || "Pedro" || true);

// AND
function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

console.log('Pedro' && 'Esther');

console.log('Pedro' && true && 'Esther');

