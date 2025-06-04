

var elemento = document.createElement('div') // cria o elemento

elemento.classList = 'conteudo-secundario' // acessa e cria classe na div

// inserindo o elemento filho no html:

var principal = document.querySelector('#container')
principal.appendChild(elemento)


// ==================================================== //

// insertBefore ( inserindo elemento antes )

var elemento2 = document.createElement('div')
elemento2.classList = 'conteudo-principal'

// selecionando o elemento referencia que vou usar pra inserir a div antes

var elemento3 = document.querySelector('#container > .conteudo-secundario') 

principal.insertBefore(elemento2,elemento3)




