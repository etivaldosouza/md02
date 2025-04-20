// entendendo o metodo map: vai invocar uma função callback passada por argumento para cada elemento do array e ele vai retornar um novo array com os elementos retornados pela sua funcao.

const numeros = [2,3,6,5,10]

const numerosDobro = numeros.map(dobro) // double é a funcao de callbak q to passando

function dobro(element,index,array){
    console.log(element,index,array)
}




function dobro(element){
    return element * 2
}

console.log('ORIGINAL',numeros)
console.log('NOVO ARRAY',numerosDobro)