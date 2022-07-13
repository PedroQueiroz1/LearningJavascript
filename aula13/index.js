let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varExtra;

varExtra = varA;
varA = varB;
varB = varC;
varC = varExtra;

// [varA, varB, varC] = [varB, varC, varA]

console.log(`varA = %s \n varB = %s \n varC = %s`,varA,varB,varC);