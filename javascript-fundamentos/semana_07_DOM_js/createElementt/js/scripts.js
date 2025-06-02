/*
    criando elementos com o DOM(document.createElement('x'))
*/

// inserindo elemento no body

// 1) criei o elemento(tag)
var novoParagrafo = document.createElement('p') 

// console.log(novoParagrafo) (caso queira vizualizar no devtoos a tag criada)

// 2) incluindo texto no paragrafo criado (criando o nó de texto) :

var texto = document.createTextNode('Este é o Conteudo do Paragráfo') 

// 3) inserindo o nó de texto no novo parágrafo

novoParagrafo.appendChild(texto) // adicionando o elemento filho(texto) dentro do elemento pai(tag)

//4) inserindo a <p> dentro do body:

var corpo = document.querySelector('body')
corpo.appendChild(novoParagrafo) // inserir o elemento filho(<p>) dentro do elemento pai(<body>)


/*
 obs: passos para criar elemento
*/

// 1) cria o elemento(createElement)

// 2) cria o texto(conteudo do elemento, createTextNode)

// 3)adiciono o texto no elemento(.appendChild)

//  4) adiciono no html(.appendChild)