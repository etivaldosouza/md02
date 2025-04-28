// descobrindo a maior palavra:

const palavras = ['olaaaaar', 'paralelepipedo', 'oi','olauuuuuuuuuuuuuyyyyyyy']

const maiorPalavra = palavras.reduce(function(maior,palavraAtual){
    if(maior.length > palavraAtual.length){
        return maior
    }else{
        return palavraAtual
    }
})

console.log(maiorPalavra)

/*   explicação:

    a primeira é o valor inicial e por ser o inicial ela será a maior e a menor palavra.
    maior.length será o acumulador e palavraAtual é cada palavra do array

    maiorPalvara          palavraAtual.length
    olaaaaar         >     olaaaaar
    olaaaaar         <     paralelepipedo
    paralelepipedo   <     olauuuuuuuuuuuuuyyyyyyy

*/

// usando o valor inicial como uma string vazia:


const palavras = ['olaaaaar', 'paralelepipedo', 'oi','olauuuuuuuuuuuuuyyyyyyy']

const maiorPalavra = palavras.reduce(function(acumulador,palavraAtual){
    if(acumulador.length > palavraAtual.length){
        return acumulador
    }else {
        return palavraAtual
    }

},'')

// maior e menor palavra com arrowfunction e operador ternario:

const palavras = ['olaaaaar', 'paralelepipedo', 'oi','olauuuuuuuuuuuuuyyyyyyy']

const maiorPalavra = palavras.reduce((acumulador,palavraAtual) =>  acumulador.length > palavraAtual.length ? acumulador : palavraAtual)
console.log(maiorPalavra)

const palavras = ['olaaaaar', 'paralelepipedo', 'oi','olauuuuuuuuuuuuuyyyyyyy']
const menorPalavra = palavras.reduce((menor,palavraAtual) => menor.length < palavraAtual.length ? menor : palavraAtual)
console.log(menorPalavra)


const palavras = ['olaaaaar', 'paralelepipedo', 'oi','olauuuuuuuuuuuuuyyyyyyy']

const resultado = palavras.reduce(function(acumulador,palavraAtual){
    return {
        maior: acumulador.maior.length > palavraAtual.maior.length ? acumalador : maior
        menor: acumulador.menor.length < palavraAtual.menor.length ? acumulador : menor
    }
})

console.log('maior', resultado.maior)
console.log('menor',resultado.menor)

