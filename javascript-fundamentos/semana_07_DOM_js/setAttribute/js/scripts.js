
/*
    -podemos alterar os atributos(id,class, etc) via JS e DOM 
    -Por Exemplo: alterar o atributo alt de uma imagem;
    -ou até o src de uma imagem;
    Todos os atributos podem ser alterados via JS; 
*/

// adicionando atributos

var titulo = document.querySelector('#title')

titulo.setAttribute('class', 'testando-atributo') // adicionei o atributo class com o valor de: testando atributo.

console.log(titulo)


var butao = document.querySelector('#btn')
butao.setAttribute('disabled','desabilitado') // adtributo disable(desabilita o botao) e o valor disabilita p/ dizer que está desabilitado o botao
console.log(butao)
// ========================================= //

// adicionando atributo id ao subtitulo

var subtitulo = document.querySelector('.subtitle') // seleciona o elemento

subtitulo.setAttribute('id','titulo-2')
console.log(subtitulo)



