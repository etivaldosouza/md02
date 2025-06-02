// trocando elemento - replaceChild()


var elemento = document.createElement('h3') // crio o elemento 

elemento.classList = 'titulo-secundario' // crio classe p/ ele

var texto = document.createTextNode('TROCANDO ELEMENTO VIA DOM') // crio texto 

elemento.appendChild(texto) // adiciono o texto ao elemento

//seleciono o elemento que quero trocar:

var titulo = document.querySelector('#title')

// seleciono o pai do elemento que quero trocar: 
var corpo = document.querySelector('body')  //ou: var pai = title.parentNode(mais aconselhavel usar dessa forma)

// trocando os elementos de fato:
corpo.replaceChild(elemento,title)  //ou: pai.replaceChild(elemento,title)