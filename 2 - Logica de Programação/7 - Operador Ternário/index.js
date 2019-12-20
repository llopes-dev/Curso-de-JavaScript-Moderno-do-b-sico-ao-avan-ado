// (condicao) ? 'valor para Verdadeiro': 'valor para falso'

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

const corUsuario = 'Black';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)