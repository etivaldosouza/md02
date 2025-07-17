var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('hoje é domingo')
        break
    case 1: 
        console.log('hoje é segunda')
        break
    case 3:
        console.log('hoje é terça')
        break
    case 4:
        console.log('hoje é quarta')
        break
    case 5:
        console.log('hoje é quinta')
        break
    case 6:
        console.log('hoje é sexta')
        break
    case 7:
        console.log('hoje é sabado')
        break
    default:
        console.log('dia invalido')
        break
}   


var cor = 'branco' //* dá para fazer criar a var: 
switch(cor){ //* posso já testar criando o valor que quero testar dentro do parametro( ex: switch('amarelo'))
    case 'azul':
        console.log('azul')
        break
    case 'verde':
        console.log('verde')
    case 'vermelho':
        console.log('cor vermelho')
        break
    default:
        console.log('cor inválida')
}

// casos de multicase


//var cor = 'amarelo'
switch('amarelo'){ // posso por a var ou o valor direto
    case 'vermelho':
    case 'amarelo':
    case 'laranja':
        console.log('cor quente')
        break
    
    case 'verde':
    case 'azul':
    case 'roxo':
        console.log('cor fria')
        break
    default:
        console.log('ñ identificado')
}


// exemplo 2:

var hoje = new Date()
var atividade = hoje.getDay()

switch(atividade) {
    case 0:
        console.log('descanço')
        break
    case 1:
        console.log('costas e biceps I')
        break
    case 2:
        console.log('peito e triceps I')
        break
    case 3:
        console.log('perna e ombro I')
        break
    case 4:
        console.log('costas e biceps II')
        break
    case 5:
        console.log('peito e triceps II')
        break
    case 6:
        console.log('perna e ombro II')
        break

}