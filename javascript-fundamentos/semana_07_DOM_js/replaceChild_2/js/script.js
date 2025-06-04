var elemento = document.createElement('h2') // crio o elemento
elemento.classList = 'titulo-secundario' // crio a class p/ o elemento

var txt = document.createTextNode('Testando Troca de Tag') // crio nó de texto

elemento.appendChild(txt) // adiciono o texto ao elemento




// substituindo o elemento em si
var p = document.querySelectorAll('p')[1] // seleciono o elemento a ser substituido
var pai = p.parentNode // seleciono o pai do elemento que vou substituir

pai.replaceChild(elemento,p) // faço a substituição