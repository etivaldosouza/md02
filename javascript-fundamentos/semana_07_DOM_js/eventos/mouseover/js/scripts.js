// quando passar o mouse em cima do botao

var butao = document.querySelector('#btn')

butao.addEventListener('click',function(){
    this.style.color = 'red'
})

butao.addEventListener('mouseover',function(){
    this.style.background = 'blue' // ao colocar o ponteiro do mouse em cima a cor de fundo fica azul
})

butao.addEventListener('mouseout',function(){
    this.style.background = '' // ao sair a cor de fundo volta ao normal
    this.style.color = '' // ao tirar o mouse de cima a cor da fonte volta a ficar normal
})

// o this uso para quando quero me referir ao elemento que estou trabalhando no evento.


// quando colocar o mouse em cima do subtitulo aparecerar o paragrafo da classe hide(foi ocultado via css)

var subtitulo = document.querySelector('.subtitle')
subtitulo.addEventListener('mouseover',function(){
    var legend = document.querySelector('#legenda') // seleciono o elemento pelo id
    legend.classList.remove('hide') // removendo a class hide p/ o paragrafo aparecer
})

subtitulo.addEventListener('mouseout',function(){
    var legend = document.querySelector('#legenda')
    legend.classList.add('hide') // add a classe hide  de volta p/ o texto ficar oculto(voltar o padrao)
})   


