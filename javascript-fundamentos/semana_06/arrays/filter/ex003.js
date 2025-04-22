/*
    filter() usado quando é preciso remover elementos indesejados com base em algumas condicoes. ou seja, o filter() é utilizado quando é preciso filtrar

     a sintaxe é a mesma do map, a diferença para é que na função de callback precisa retornar um valor boleano:

*/

// utilizando o filter() para remover elementos duplicados em um array:

const numeros = [2,3,4,5,4,12,19,7,2,5]
const novo = numeros.filter(function(elemento,index,array){
console.log(elemento,index,array)
})


const numeros = [2,3,4,5,4,12,19,7,2,5]

const numUnico = numeros.filter(function(elemento,index,array){ //lembrando q elemento é cada item(nr no caso) do array
    return array.indexOf(elemento) === index
})

console.log(numUnico)

//====== removendo nomes repetidos ==================//


const nomes = ["Ana", "Bruno", "Carlos", "Ana", "Daniela", "Bruno", "Eduardo"];

const nomUnico = nomes.filter(function(nome,index,array){
    return array.indexOf(nome) === index
})

console.log(nomUnico)

// array.indexOf(nome) → Procura onde o nome aparece pela primeira vez no array.

//index → É o índice do nome que estamos olhando agora.

/* 

    Se a posição onde ele apareceu pela primeira vez for igual ao índice atual, isso significa: indexOf(elemento) === index

    É a primeira vez que encontramos esse nome → Mantém no novo array.

    Se forem diferentes, significa:

    Esse nome já apareceu antes → Não coloca no novo array.

*/

// ana aparece a 1ª vez no indice 0, bruno aparece a 1ªvez no indice 2...

//=======================================================//

const nomes = ["Ana", "Bruno", "Carlos", "Ana", "Daniela", "Bruno", "Eduardo"];

const nomeUnico = nomes.filter(function(nome,index,array){
    console.log(nome,index,array)
})


//=============== utilizando o arrow function ===========//

const nomes = ["Ana", "Bruno", "Carlos", "Ana", "Daniela", "Bruno", "Eduardo"]

const nomeUnico = nomes.filter((nome,index,array) => array.indexOf(nome) === index )

console.log(nomeUnico)


//============= utilizando o new Set() ================//

const numeros = [2,3,4,5,4,12,19,7,2,5]

const numeroUnico = [...new Set(numeros)]
console.log(numeroUnico)


