/*

parametro rest: usado quando ñ sabemos com quantos parametros vamos receber 

coloca-se os 3pontinhos seguidos de um nome que será o nome da variavel de um array onde irá armazenar os valores dos parametros que vao sendo criados depois

no caso abaixo criei a variavel complemento que será um array de valores do paramentro criado depois

*/

function escreverEndereco(rua,cidade,pais,...complemento){
    console.log(rua);
    console.log(cidade)
    console.log(pais)
    console.log(complemento)
    
}

escreverEndereco('rua 35,','São José de Ribamar,','Brasil,', 'Estado: Maranhão,','cep:65110000,','Região: nordeste')



