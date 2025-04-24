const data = [
    {
        name: 'sujeito',
        age: 23,
        salary: 4000,
        active: true,
        team: 'Frontend',
        bonus:0,
    },

    {
        name:'jose',
        age:36,
        salary:3000,
        active:true,
        team:'backend',
        bonus:0,
    },

    {
        name:'ana carroline',
        age: 32,
        salary:6000,
        active:true,
        team:'mobile',
        bonus:0,
     
    }, 

    {
        name:'bauer',
        age:20,
        salary:3500,
        active:true,
        team:'frontend',
        bonus:0,
    },

    {   
        name:'mathues',
        age:22,
        salary:2500,
        active:false,
        team:'mobile',
        bonus:0,
    }

]

const pessoa = data.map(function(nomes){
    let mensagem = ''
    if(nomes.salary <= 2500){ // aqui só tem uma condição mas posso usar mais de uma 
        nomes.salary += 900
        nomes.bonus += 1
        nomes.mensagem = 'houve aumento de R$ 900'

    }else{
        nomes.mensagem = 'ñ houve aumento'
    }
    return {
        name: nomes.name,
        salay: nomes.salary,
        bonus: nomes.bonus,
        mensagem: nomes.mensagem
    }
})

console.log(pessoa)


//============= acrescentando propriedade mensagem ao objeto nomes =====================//


const data = [
    {
        name: 'sujeito',
        age: 23,
        salary: 4000,
        active: true,
        team: 'Frontend',
        bonus:0,
    },

    {
        name:'jose',
        age:36,
        salary:3000,
        active:true,
        team:'backend',
        bonus:0,
    },

    {
        name:'ana carroline',
        age: 32,
        salary:6000,
        active:true,
        team:'mobile',
        bonus:0,
     
    }, 

    {
        name:'bauer',
        age:20,
        salary:3500,
        active:true,
        team:'frontend',
        bonus:0,
    },

    {   
        name:'mathues',
        age:22,
        salary:2500,
        active:false,
        team:'mobile',
        bonus:0,
    }

]


const pessoa = data.map(function(nomes){

    if(nomes.salary <= 2500){

        nomes.salary += 900
        nomes.bonus += 1
        nomes.mensagem = 'houve aumento de R$ 900' // acrescentando propriedade

    }else{
        nomes.mensagem = 'ñ houve aumento'
    }

    return {
        
        name: nomes.name, 
        salary: nomes.salary, 
        mensagem: nomes.mensagem
    }
})

console.log(pessoa)
console.log(data.reverse()) // inverte a ordem
console.table(pessoa);
