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


var cor = 'branco' //* posso ñ criar a var ja dentro do parametro do switch
switch(cor){ //* posso ja testar criando a variavel dentro do parametro( ex: switch('amarelo'))
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

