/* Luiz Otavio Miranda tem 30 anos, pesa 84kg , tem 1.8
de altura e seu IMC é de 25.925925925925924
Nascimento: 1980
*/

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const peso = 84;
const idade = 30;
const alturaEmMt = 1.80;
let imc; // peso / (altura * altura);
let AnoNascimento;

imc = peso / (alturaEmMt * alturaEmMt);

AnoNascimento = 2019 - idade;

console.log(`O ${nome} ${sobrenome} tem ${peso} KG , ${idade} anos , ${alturaEmMt} Mt e um IMC de ${imc}`)
