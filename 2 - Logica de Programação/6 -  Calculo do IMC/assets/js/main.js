// Capturar o evento de submit do form
const form = document.querySelector("#formulario");
form.addEventListener('submit' , function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso Inválido' , false);
        return;
    }

    if(!altura){
        setResultado('Altura Inválida' , false);
        return;
    }

    // Calculando o IMC
    const imc = getImc(peso , altura);
    const nivelImc = getNivelImc(imc);

    
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(imc, true)
});

// Função para Lógica do IMC
function getNivelImc(imc){
    const nivel = ['Abaixo do peso' , 'Peso normal' ,  'Sobrepeso' , 'Obesidade grau 1' ,
'Obesidade grau 2' , 'Obesidade grau 3']

if (imc >= 39.9) return nivel [5];
if (imc >= 34.9) return nivel [4];
if (imc >= 29.9) return nivel [3];
if (imc >= 24.9) return nivel [2];
if (imc >= 18.5) return nivel [1];
if (imc < 18.5)  return nivel [0];
}


// Função para Calcular o IMC
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}



// Função para criar Parágrafo

function criaP(){
    const p = document.createElement('p');
    return p;
}



// Função para Mostrar o Resultado

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);

}