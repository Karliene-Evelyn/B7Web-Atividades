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

//------Manipulado elementos------

function clicou(){
    const teste = document.querySelector('#teste');
    const ul =teste.querySelector('ul')

    console.log(ul)
}