/*-------retorno da função---------
function nomeCompleto(nome,sobrenome) {
  return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto('karlie', 'pinto')
console.log("completo: " + completo);
 ou console.log(nomeCompleto("karli", "pinto")) */

/* ------Função com retorno condicional------
function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
let idade = 65;
let verificacao = maiorDeIdade(idade);

if (verificacao) {
  console.log('E maior de idade');
}
else{
  console.log('E menor de idade');
}*/

/* -------Exercicios------
- exercicio 1

function calcPct(x,y) {
  return (y / x) * 100;
}

let x = 80;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);


- exercicio 2
function calcularImovel(m, q) {
  let m2 = 3000;
  let preco = 0;

  switch (q) {
    case 1:
    default:
      preco = m * m2;
      break;
    case 2:
      preco = m * (m2 * 1.2);
      break;
    case 3:
      preco = m * (m2 * 1.5)
      break;
  }

  return preco;
}

let mentragem = 123;
let quartos = 3;
let preco = calcularImovel(mentragem, quartos);

console.log(`A casa custa ${preco}`); 

- exercicio 3

function validar(u,s){
  if(u === 'pedro' && s === 123){
    return true;
  } else{
    return false;
  }
}

let usuario = 'pedro'
let senha = 123;

let validacao = validar(usuario, senha);

if (validacao) {
  console.log('Acesso concedido');
} else {
  console.log('Acesso negado');
}
*/
