/*Imprimir números pares de 1 a 10:
for(i = 2; i <= 10; i+=2){
    console.log(i);
}*/

/* Imprimir números de 0 a 20, apenas os pares:
for(i = 0; i <= 20; i+=2){
    console.log(i);
} */

/*Imprimir a tabuada de multiplicação do número 5:
for(let i = 0; i <= 10; i++){
    console.log(`${i} * 5 = ${i*5}`);
}*/

/* Imprimir os números de 10 a 1 em ordem reversa:
for (let i = 10; i >= 1; i--) {
    console.log(i);
  } */

/* Somar elementos de um array:
let lista = [30, 20, 50, 100];

let soma = 0;

for(let i = 0; i < lista.length; i++){
    soma += lista[i];
}
console.log(soma); */

/* Encontrar o maior número em um array
let lista = [1, 110, 2, 45, 67];

let maior = lista[0];

for(let i = 0; i <= lista.length;i++){
    if(lista[i] > maior){
        maior = lista[i];
    }
}

console.log(maior); */

let lista = [1, 110, 2, 45, 67];

for(let i = lista.length - 1; i >= 0; i--){
    console.log(lista[i]);
}