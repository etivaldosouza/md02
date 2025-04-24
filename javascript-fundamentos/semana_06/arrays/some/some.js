// o metodo some() percorrer o array  e verifica se tem ''pelo menos um'' elemento que que satisfaca uma conidição dada. o retorno será um boleano true ou false


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

const cheked = data.some(function(user){
    return user.salary === 2500 // se tem pelo menos um salario que é igual a 2500(como tem o retorno será true.)
})

console.log(cheked)