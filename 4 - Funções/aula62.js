// Parametros de função
// arguments que sustema todos os argumentos enviados

function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}

funcao(10, 20, 30);

