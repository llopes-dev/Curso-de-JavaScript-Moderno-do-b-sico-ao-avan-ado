// new é uma função construtora

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
const data = new Date(1576851209478);
console.log('Dia' , data.getDate())
console.log('Mês' , data.getMonth() + 1) // Mês começa do Zero
console.log('Ano' , data.getFullYear())
console.log('Min' , data.getHours())
console.log('Seg' , data.getMinutes())
console.log('ms' , data.getSeconds())
console.log('Dia semana' , data.getDay()) // 0 - Domingo
console.log(data.toString());
//console.log(Date.now());