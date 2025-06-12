
let tituloDiv = document.createElement('h3') // crio o elemento(tag)

var txt = document.createTextNode('SPORT RECIFE') // crio o texto p/ esse elemento

tituloDiv.appendChild(txt) // adiciono o texto ao elemento

// adicionando o elemento no html usando um elemento de referencia p/ add o elemento antes dele

var referenc = document.querySelector('.cx01 > .cx02') // identifica o elemento de referencia

var pai = referenc.parentNode // identifa o pai do elemento de referencia

pai.insertBefore(tituloDiv,referenc) // coloca o elemento criado antes do elemento de referencia

