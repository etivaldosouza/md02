/*
 
    formas de alterar conteudo do elemento

    1) innerHTML

    2) textContent -> mais utilizada, recomendada e performatica


 */


// innerHTML

var titulo = document.querySelector('#title') // selecionando elemento

titulo.innerHTML = 'Testando o texto alterado'


// textContent

 var subtitulo = document.querySelector('.subtitle')
 console.log(subtitulo)
 
 subtitulo.textContent = 'Testando a alteração do subtitulo'  


