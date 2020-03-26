// Declaração de função
function falaOi(){
    console.log("Oi");
}

falaOi();

// Firts-class objects (Objeto de primeira classe)
// Function Express

const souUmDado = function(){
    console.log('sou um dado')
};

souUmDado();

// Arrow Function
const funcaoArrow = () => {
    console.log('sou uma arrow function')
};

funcaoArrow();

// Dentro do Objeto
const obj = {
    falar(){
        console.log('estou falando');
    }
};

obj.falar();