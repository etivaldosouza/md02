/*
    criando elemento numa div
*/ 

// 1) primeiro passo(criar o elemento):

var novoParagrafo = document.createElement('p')

// console.log(novoParagrafo) (caso queria vizualizar o pararagrafo criado)

// 2) segundo passo (criar o texto, nó de texto, dentro do paragrafo):

var texto = document.createTextNode('esse é o novo paragrafo criado via JS')

// 3) adicionar o nó de texto dentro do seu elemento pai que é o <p> :

novoParagrafo.appendChild(texto)

// 4) o último passo é adicionar o paragrafo(elemento filho) dentro do seu elemento pai(div)


var dv = document.querySelector('#container')//*
dv.appendChild(novoParagrafo) 


//* o ultimo passo pode ser substituida apenas pela linha de baixo: 

// container.appendChild(novoParagrafo)