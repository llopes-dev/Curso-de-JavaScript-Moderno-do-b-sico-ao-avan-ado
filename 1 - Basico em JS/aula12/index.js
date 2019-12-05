let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATemp = varA;

varA = varB; // B
varA = varB; // C
varA = varATemp; // B



console.log(varA , varB , varC);