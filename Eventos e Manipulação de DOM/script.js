/*------Selecionando Elementos------
document.getElementsByTagName("h1")
document.getElementById("teste")
document.getElementByClassName("botao")

outra forma = selector all sempre retorna um array
document.querySelector("#teste")
document.querySelector(".botao")
document.querySelector("h1")
document.querySelectorAll("#teste ul li") */

/*------Eventos de Clique
function clicou(){
    alert("clicou")
}

let botao = document.querySelector(".botao");
botao.addEventListener("click", () =>{
    clicou()
})*/

/*------Manipulado elementos 1------

function clicou(){
    const teste = document.querySelector('#teste');
    const ul =teste.querySelector('ul')

    ul.innerHTML = '<li> alterado<li>'; // mostrar ou alterar o que tem dentro 
    ul.innerHTML += '<li> alterado<li>'; // deixar o que tem e acrescentar 

    inner refaz todo o conteudo
} */

/*----- Manipulando elementos 2------

function clicou(){
    const teste = document.querySelector('#teste');
    const ul =teste.querySelector('ul')
    ul.children[0].append("alterado") // não mexe na memoria, melhor que inner - mas so adiciona texto

    //adicinar elementos com append

    let newLi = document.createElement('li')
    newLi.innerText = "item adicionado"

    ul.appendChild(newLi)  //adiciona novo elemento na tela

    //append e prepend

} */

//Manipulando elementos 3 -------
function clicou(){
    const teste = document.querySelector('#teste');
    const ul =teste.querySelector('ul')

    const newbt = document.createElement('button');
    newbt.innerHTML=  'novo bt';

    ul.after(newbt);

    let newul = document.createElement('ul');
    for (let i = 0; i < 5; i++) {
        let newli = document.createElement('li');
        newli.innerHTML = 'li numero: ' + i;
        newul.append(newli);
        
    }
    ul.after(newul);
}