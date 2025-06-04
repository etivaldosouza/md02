/*
    Removendo  elemento filho 
*/ 

// primeiro, seleciono o elemento pai:

var contheiner = document.querySelector('#container')

// indico qual elemento filho vou remover:

var paragrafo = document.querySelector('#container > p')

contheiner.removeChild(paragrafo)


// =================================== //


// removendo um elemento em si:(que ñ seja elemento filho)

// removendo o subtitulo

var subtitulo = document.querySelector('.subtitle')

subtitulo.remove()
