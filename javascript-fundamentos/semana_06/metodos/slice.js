
//metodo .slice(): fatiamento

// retorna uma fatia de um array sem considerar o último porém ñ altera o array original

const numeros = [5,3,12,17,10,99]

const remove = numeros.slice(0,4) // vai imprimir do 1º até o elemento da 3ª posição pois o 4º ñ entra. sempre o ultimo elemento ñ entra. se quero incluir o ultimo somo ele +1 ou coloco o elemento subsequente da sua posição.

console.log(remove)



console.log(numeros.slice(0,5)) // p/ incluir o 10 como removidos

console.log(numeros.slice(2)) // posso omitir o último elemento e ai ele vai mostrar do elemento da posição 2 até o último
