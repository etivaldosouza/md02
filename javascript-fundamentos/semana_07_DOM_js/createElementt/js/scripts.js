/*
    criando elementos com o DOM
*/
// inserindo elemento no body

// 1) criei o elemento
var novoParagrafo = document.createElement('p') 

console.log(novoParagrafo)

// 2) incluindo texto no paragrafo criado:
//(criando o nó de texto) 

var texto = document.createTextNode('Este é o Conteudo do Paragráfo') 

// 3) inserindo o nó de texto no novo parágrafo

novoParagrafo.appendChild(texto)

// inserindo o p dentro do body:

var corpo = document.querySelector('body')
corpo.appendChild(novoParagrafo)


