var butao = document.querySelector('#btn')
console.log(butao)


// adicionando evento de click

butao.addEventListener('click',function(){
    console.log('clicou!')
    console.log(this) // quando a gente ta usando o this dentro do evento, o this é usado p/ se referir o próprio elemento do evento

    this.style.color = 'red' // alterando o estilo do elemento
    this.textContent = 'clicado!' // alterando texto do botao(posso usar o innerHTML ou innerText)
})


//click afetando otros elementos: ao clicar no titulo aparecerá a msg clicou! e sumirá o subtitulo

var titulo = document.querySelector('#title')

titulo.addEventListener('click', function(){
    console.log('clicou!')
    var subtitulo = document.querySelector('.subtitle')
    subtitulo.style.display = 'none'
})
