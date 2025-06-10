var elemento = document.createElement('div') // crio o elemento
elemento.classList = 'item' // crio classe
console.log(elemento)

var texto = document.createTextNode('essa é a div filha')
elemento.appendChild(texto) // crio o nó de texto(conteudo)

var p = document.querySelector('#container > p') // seleciono o elemento de referencia

var pai = p.parentNode // coloco o js p/ achar o pai do elemento de referencia.(tem q ter sempre essa consulta ao elemento pai)

pai.insertBefore(elemento,p) // coloco na ordem que quero que o elemento criado apareça



