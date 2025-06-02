var elemento = document.createElement('div') // crio o elemento
elemento.classList = 'item' // crio classe
console.log(elemento)

var texto = document.createTextNode('essa é a div filha')
elemento.appendChild(texto) // crio o nó de texto(conteudo)

var p = document.querySelector('#container p') // seleciono o elemento de referencia

var caixa = document.querySelector('#container') // seleciono o elemento pai

caixa.insertBefore(elemento,p) // coloco na ordem que quero que o elemento criado apareça



