// conversor de medidas de Farenheit p/ celsios:

const farenheit = [0,32,45,50,75,80,120]

const celsios = farenheit.map(function(temp){
    const resultado = Math.round((temp - 32) * 5/9)
    return `${temp}ºF = ${resultado}ºC`
    
}).join(' , ')

console.log(celsios)


const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const resultado = fahrenheit.map(function(temp) {
    const celsius = Math.round((temp - 32) * 5/9);
    return `${temp} =  ${celsius}º`; // cria a string com hífen no meio
}).join(' , ');

console.log(`[${resultado}]`);