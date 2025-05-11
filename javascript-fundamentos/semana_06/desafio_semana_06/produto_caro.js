/*
    encontrar todos os produtos que custam mais de R$ 1.600 e adicionando uma nova propriedade ao ao bjeto do array com a chave obs e o valor = 'produto acima de 1600'.
*/

const produtos = [
    {
        nome: 'Notebook',
        preco: 3000

    },

    {
        nome: 'Smartphone',
        preco: 2000

    },

    {
        nome: 'Tablet',
        preco: 1500

    },

    {
        nome: 'Fone de Ouvido',
        preco: 1800

    },

    {
        nome: 'Caneta',
        preco: 8000

    },
]

const prodCaros = produtos.filter(produto => produto.preco > 1600).map(produto => ({...produto, obs : 'produto acima de 1600', eu:"etivaldo"}))

console.log(prodCaros);


/*
    explicação:
    Os parênteses ao redor do objeto { ... } são obrigatórios aqui para dizer ao JavaScript que estamos retornando um objeto literal diretamente.

    Sem os parênteses, o JavaScript pode achar que você está abrindo um bloco de código e gerará erro ou comportamento inesperado.

    ...produto:
Isso é o operador spread.

Ele copia todas as propriedades do objeto produto original(o anterior) para o novo objeto.

Por exemplo, { nome: 'Notebook', preco: 3000 } será "espalhado" dentro do novo objeto.

obs: 'produto acima de 1600'
Adiciona uma nova propriedade chamada obs com o valor 'produto acima de 1600'.

*/