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

/*------arrow fuction------
const somar = (x,y) => {
  return x+y;
}

--outra forma--

const somar = (x,y) => x + y;
console.log(somar(10,5));

--outra forma --
const sobrenome = sob => 'karli' + sob;*/

/*------Variáveis dentro de funções------
let count = 0;

const add = () => count++;

add()
add()

console.log(count); */

/*------funções dentro de funções------

function addSquares(a, b) {
  const square = (x) => {
    return x * x;
  }

  let sqrA = square(a);
  let sqrB = square(b)
  return sqrA + sqrB;
}
console.log(addSquares(2,3)); */

/*------Introdução ao array------

let idades = [10,20,30];
let lista = ['eu tenho', idades]

console.log(lista);

let lista = ['bb',[1,2]];

console.log(lista[1][0]); */

/*------Operações básicas de array-----

let ingredientes = [
  'agua',
  'farinha',
  'ovo',
  'corante',
  'sal'
];

ingredientes.pop() // remove o ultimo item
ingredientes.shift() // remove o primeiro item
// não recomendavel --> ingredientes[5] = 'cebola'
// recomendavel ingredientes.push('cebola')
console.log(`Total de ingredientes: ${ingredientes.length}`); */

/*------Exercicios array------

let carros = ['BMW', 'Ferrari', 'Mercedes']
let x = 1;
console.log('1. ' + carros[x]);

console.log('2. Lista com Audi:');
carros[1] = 'Audi'
console.log(carros);

console.log('3. Lista com Volvo');
carros.push('Volvo')
console.log(carros);

console.log('4. itens no array:' + carros.length); */

/*----- o que são objetos -----

 let personagem = {
  nome: 'karli', // propriedade: valor
  idade: 23,
  pais: 'Brasil',
  olhos: ['preto', 'azul'],
  caracteristicas: {
    peso: 68,
    altura: 1.65,
  }
 }

console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(personagem.caracteristicas.altura);
console.log(personagem.olhos[1]); */

/*------Acessando e alterando objetos-----
let personagem = {
  nome: 'karli', // propriedade: valor
  idade: 23,
  pais: 'Brasil',
  olhos: ['preto', 'azul'],
  caracteristicas: {
    peso: 68,
    altura: 1.65,
  }
 }
personagem.nome ='Pedro';
personagem.caracteristicas.peso += 5;
personagem.olhos.push('verde');

console.log(personagem.nome);
console.log(personagem.caracteristicas.peso);
console.log(personagem.olhos);
 
outro exemplo

let personagem = {
  nome:  'karli',
  idade: 90,
  carros: [
    {modelo: 'Fiat', cor: 'preto'},
    {modelo: 'Ferrari', cor:'vermelho'}
  ]
}

console.log(personagem.carros[0].cor);*/

/*------Função dentro de objeto------

let pessoa = {
  nome: 'karli',
  sobrenome: 'pinto',
  idade: 23,
  nomeCompleto: function(){
    return `${this.nome} ${this.sobrenome}`
  }
}
console.log(pessoa.nomeCompleto());*/

/*------Loop for------

for(let i = 0; i <= 10; i++){
  console.log(i);
}*/

/*------Dando loop em arrays------

let cores = [
  {nome: 'preto', qt: 10},
  {nome: 'azul', qt: 5},
  {nome: 'vermelho', qt:15}
]

for(let n = 0; n < cores.length;n++){
  console.log(cores[n]);
}

for(let i in cores){
  console.log(cores[i].nome.toUpperCase());
}

for(let cor of cores){
  console.log(`Nome: ${cor.nome.toUpperCase()} - ${cor.qt}`);
} */

/*------O loop while------

let numero = 0;

while(numero < 10){
  console.log(`O numero da vez é ${numero}`);
  numero++;
} */

/*------Exercicios de loops-----
let fruits = ['maca', 'uva', 'banana']

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

let n = 1;
while(n <= 100){
  console.log(n);
  n++;
} */

/*-----Funções de Arrays-----

let fruits = ['maca', 'uva', 'laranja','banana']

//console.log(fruits.join(', '));
fruits[fruits.length-1]='pera'

console.log(fruits); */


