// o map é utilizado para quando quero percorrer um array, aplicar uma funcao e retornar outro arrar


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

const pessoa = data.map(function(nomes,index){
    return `olá ${nomes.name}`
})

console.log(pessoa)

