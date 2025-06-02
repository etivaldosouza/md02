/*
    Removendo o elemento filho 
*/ 

// primeiro, seleciono o elemento pai:

var contheiner = document.querySelector('#container')

// uso o removeChild p/ remover o elemento filho:

var paragrafo = document.querySelector('#container > p')

contheiner.removeChild(paragrafo)


// =================================== //


// removendo o elemento em si:

// removendo o subtitulo

var subtitulo = document.querySelector('.subtitle')

subtitulo.remove()
