
// Cria um novo elemento <h3> 

var elemento = document.createElement('h3') 

// adiciona uma classe

elemento.classList = 'titulo-secundario' 


// Cria um nó de texto e adiciona ao h3

var texto = document.createTextNode('TROCANDO ELEMENTO') 
elemento.appendChild(texto)

// Define uma classe para o parágrafo

var paragrafo = document.querySelectorAll('p')[1]  
paragrafo.setAttribute('class','paragrafo-1') 


// Seleciona o parágrafo dentro da div#container
var p1 = document.querySelector('#container .paragrafo-1')

// Insere o h3 antes do parágrafo dentro de #container
var container = document.querySelector('#container')
container.insertBefore(elemento, p1)

