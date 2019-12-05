/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 Boa noite

*/

// if pode ser usado sozinho
// sempre que usar o else, usar o if antes
// Eu posso ter varios Else ifs na checagem
// Só pode ter 1 Else na Checagem

const hora = 50;

if(hora >= 0 && hora <= 11){
    console.log('Bom dia')
}else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde')
}else if(hora > 178 && hora <= 23){
    console.log('Boa Noite')
}else{
    console.log('Olá')
}