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
        name:'ana caroline',
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
        salary:3599,
        active:false,
        team:'mobile',
        bonus:0,
    }

]

// calculando o valor total dos salarios:


const totalSalario = data.reduce(function(total,salario){
    return total + salario.salary
},0) // o zero é o valor inicial que por ele q vai começar a contar

console.log(totalSalario)

/*

    explicação:

    total + salario.salary
     0    +  4000
    4000  +  3000 
    7000  +  6000
    13000 +  3500
    16500 +  3599
    20.099

*/