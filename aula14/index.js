let umaString = "Um gato";

console.log(umaString[6]);
console.log(umaString.charAt(0));
console.log(umaString.concat(' ', 'em', ' ', 'um'));
console.log(umaString + " em um lindo dia");
console.log(`${umaString} em um lindo dia`);

console.log(umaString.indexOf('gato'));
console.log(umaString.lastIndexOf('U',1));

console.log(umaString.match(/[a-z]/g)); // com ou sem g

console.log(umaString.search(/[a-z]/));

let segundaString = umaString.replace("Um","Outro");
console.log(segundaString);

console.log(segundaString.replace(/o/g,"a"));
console.log(umaString.length);

console.log(umaString.slice(2,5));
console.log(umaString.split('m',1));

console.log(umaString.toUpperCase()); //toLowerCase