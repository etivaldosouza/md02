/*

 -É muito comum alterar o CSS com Jva Script também
 -As regras de CSS ficam de forma inline;(elas sobrescrevem a maioria das outras regras, fica na tag)
 -Substituindo a maioria das outras regras criadas;

*/

// adicionando CSS via DOM

// adicionando css ao titulo principal

var titulo = document.querySelector('#title') // selecionando elemento

titulo.style.color= 'blue' // adicionando o estilo


// ========================================== //


// alterando o estilo do subtitulo

// cuidado com a propriedade background-color( propriedades com mais de uma palavra tira o hifem e coloca o camoucase: a primeira letra da segunda palavra fica maiuscula)

var subtitulo = document.querySelector('.subtitle')
subtitulo.style.backgroundColor = 'yellow'


// adicionando varios estilos:(.cssText)

var list = document.querySelector('#lista')
list.style.cssText = 'color: red; background-color: lightgray;font-size: 50px';