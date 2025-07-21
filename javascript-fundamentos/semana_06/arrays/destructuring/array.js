// forma de pegar os arrays e colocar dentro de uma variavel:

// forma antiga:

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']
var nome = usuario[0] // usuario na posição 0
var idade = usuario[1] // usuário na posição 1
var ano = usuario[3] // usuário na posição 3
console.log(nome,idade,ano)

// forma atualizada com o ecascript 6 usando o Destructin:

var usuario = ['ayrton',26,'programador abordo',2019,'Brasileiro']

var [nome,idade, , ,nacionalidade] = usuario; 
console.log(nome,idade,nacionalidade)



// vc cria as variaveis para pegar cada elemento na posição correspondente da variavel usuario. obs: na posição 2 esta vazia ou seja vai pular p/ posiçao 3
//na var nome por estar na posição 0 eu quero q seja armazenado  o elemento da posição 0 do array usuario, na var idade por esta na posição 1 vai pegar o elemento da posição do array usuario e assim sucessivamente 
// as virgulas são para pular para poder pegar o elemento da ordem correspondente.


// exercicios de Destructuring:
// extraia os valores a,b e do array abaixo:

// forma antiga

const numeros = [10, 20, 30];
var a = numeros[0]
var b = numeros[1]
var c = numeros [2]
console.log(a,b,c)

// usando o destructuring no array

var [a,b,c] = numeros
console.log(a,b,c)


// ex02:

// Extraia os valores de nome e idade do objeto abaixo:

const pessoa = {
  nome: "Lucas",
  idade: 25
};

// forma antiga
var nome = pessoa.nome
var idade = pessoa.idade
console.log(nome,idade)

// usando o destruturing no objeto

var {nome,idade} = pessoa
console.log(nome,idade)

// ex03: Extraia o valor de cidade e renomeie para local:

const endereco = {
  rua: "Rua A",
  cidade: "São Paulo"
};

const {cidade:local} = endereco // o mesmo p/ array
console.log(local) 

// ex04: extraia bairro do objeto:

const pessoa = {
  nome: "João",
  endereco: {
    rua: "B",
    bairro: "Centro"
  }
};

var {endereco:{bairro}} = pessoa
console.log(bairro)

// ex05: Use valor padrão idioma = "português" caso ele não exista:

const config = {
  tema: "escuro"
};

const {tema,idioma = 'português'} = config
console.log(tema,idioma)

// ex06: Extraia apenas o primeiro e o terceiro elemento do array:

const cores = ["vermelho", "verde", "azul"];

const [a1, ,a3] = cores
console.log(a1,a3)


//====== destruturing aninhado: =============//
    
// ex07 extraia os valores 2 e 4:

const dados = [1, [2, 3], 4];
const [,[a2],a4] = dados
console.log(a2,a4)

// ex08: extraindo os valores 3 e 4:

const dados = [1, [2, 3], 4];

const [,[,a1],a2] = dados
console.log(a1,a2)

// ex09:Troque os valores das variáveis x e y:


let x = 1;
let y = 2;

[x,y] = [y,x]
console.log(x)
console.log(y)

console.log(x,y) // pode imprimir logo os dois