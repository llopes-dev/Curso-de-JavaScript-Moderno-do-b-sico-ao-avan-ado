const numero = Number(prompt('Type a Number: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Seu número + 2 é : ${numero + 2} </p>`;
texto.innerHTML += `<p>Raíz quadrada é: ${Math.sqrt(numero)} </p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para baixo:${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${Math.toFixed(2)} </p>`;