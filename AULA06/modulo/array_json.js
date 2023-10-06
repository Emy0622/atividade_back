/******************************************************************************
 * Objetivo: Aprender a trabalhar com estrutura de dados Array e JSON
 * Data: 29/09/23
 * Autor: Yasmin Targino
 * Versão: 1.0
 *******************************************************************************/

// dois simbolos essenciais qu precsamos diferenciar 
// {} -> representa a estrutura JSON
// [] -> representa a estrutura array ( é uma matriz, mas o array é o nome tecnico)

//tdo array criado começa no indice 0

//criar função

//criar array de uma lista de nomes, maneira mais basica onde separa as coisas com a , 

// const introducaoArray = function() {
//     let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo'];

//     //exibe os dados do array
//     console.log(listaDeNomes);

//     //exibe os dados do array em formato de tabela
//     console.table(listaDeNomes);

//     // retorna a quantidade de itens
//     console.log(listaDeNomes.length);

//     // adiciona mais um elemento no final da lista
//     listaDeNomes.push('Roberta');

//     //adicionar no inicio da lista, mas altera a ordem
//     listaDeNomes.unshift('Julia');
//     console.table(listaDeNomes);

//     //remove o ultimo elemento do array
//     listaDeNomes.pop()

//     //vai remover o elemento do inicio do array
//     listaDeNomes.shift();

//     //Remove um elemento baseado no indice, podendo definir a qntdade de itens a serem excluidos
//     //EX: (2,3) -> 2 é a referencia do indice e 3 é referente a quantidade de itens

//     //precisa falar o indice que vc quer remover e o quanto vc quer remover
//     // 2,1 tira só os dois 2,3 tira 3 a partir da posição 2 

//     listaDeNomes.splice(2, 1);

//     console.table(listaDeNomes);

//     listaDeNomes.push('Andre da silva', 'Julia alves', 'Maria eduarda', 10);
//     console.log(listaDeNomes);

//     // tytpof - retorna o tipo de dados de um elemento
//     console.log(typeof(listaDeNomes[7]));


//     console.log(listaDeNomes[3]);

// }


// const percorrendoArray = function() {
//     let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Precessador', 'HD'];

//     //WHILE
//     // let cont = 0;
//     // while(cont < listaDeProdutos.length){
//     //     console.log('Nome do Produto:' + listaDeProdutos[cont]);
//     //     cont +=1;
//     // }


//     //FOR
//     // for(let cont=0; cont < listaDeProdutos.length; cont++){
//     //     console.log('Nome do produto:' + listaDeProdutos [cont]);
//     // }


//     //FOREACH
//     // listaDeProdutos.forEach(function(produto){
//     //     console.log ('Nome do produto: ' + produto)

//     // })

//     //Retorna o indice do elemento que foi encontrado
//     //Caso não exista o item buscado retorna -1
//     console.log(listaDeProdutos.indexOf('Impressora'));

//     //Retorna verdadeiro ou falso
//     console.log(listaDeProdutos.includes('Notebook'));

// }

// const filtrarProduto = function(nomeProduto) {
//     let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Precessador', 'HD'];
//     let nome = nomeProduto;

//     let status;

//     if (listaDeProdutos.indexOf(nome) >= 0)
//         status = true;
//     else
//         status = false;
//     // return listaDeProdutos.includes(nome);

//     listaDeProdutos.forEach(function(produto) {
//         if (produto.toLocaleUpperCase == nome.toLocaleUpperCase())
//             status = true;



//     })

//     return status;
// }

// // console.log(filtrarProduto('Mouse'));

// /******************************************************************************
//  * Objetivo: Aprender a trabalhar com estrutura de dados Array e JSON
//  * Data: 29/09/23
//  * Autor: Yasmin Targino
//  * Versão: 1.0
//  *******************************************************************************/

// // dois simbolos essenciais qu precsamos diferenciar 
// // {} -> representa a estrutura JSON
// // [] -> representa a estrutura array ( é uma matriz, mas o array é o nome tecnico)

// //tdo array criado começa no indice 0

// //criar função

// //criar array de uma lista de nomes, maneira mais basica onde separa as coisas com a , 

// const introducaoArray = function() {
//     let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo'];

//     //exibe os dados do array
//     console.log(listaDeNomes);

//     //exibe os dados do array em formato de tabela
//     console.table(listaDeNomes);

//     // retorna a quantidade de itens
//     console.log(listaDeNomes.length);

//     // adiciona mais um elemento no final da lista
//     listaDeNomes.push('Roberta');

//     //adicionar no inicio da lista, mas altera a ordem
//     listaDeNomes.unshift('Julia');
//     console.table(listaDeNomes);

//     //remove o ultimo elemento do array
//     listaDeNomes.pop()

//     //vai remover o elemento do inicio do array
//     listaDeNomes.shift();

//     //Remove um elemento baseado no indice, podendo definir a qntdade de itens a serem excluidos
//     //EX: (2,3) -> 2 é a referencia do indice e 3 é referente a quantidade de itens

//     //precisa falar o indice que vc quer remover e o quanto vc quer remover
//     // 2,1 tira só os dois 2,3 tira 3 a partir da posição 2 

//     listaDeNomes.splice(2, 1);

//     console.table(listaDeNomes);

//     listaDeNomes.push('Andre da silva', 'Julia alves', 'Maria eduarda', 10);
//     console.log(listaDeNomes);

//     // tytpof - retorna o tipo de dados de um elemento
//     console.log(typeof(listaDeNomes[7]));


//     console.log(listaDeNomes[3]);

// }


// const percorrendoArray = function() {
//     let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Precessador', 'HD'];

//     //WHILE
//     // let cont = 0;
//     // while(cont < listaDeProdutos.length){
//     //     console.log('Nome do Produto:' + listaDeProdutos[cont]);
//     //     cont +=1;
//     // }


//     //FOR
//     // for(let cont=0; cont < listaDeProdutos.length; cont++){
//     //     console.log('Nome do produto:' + listaDeProdutos [cont]);
//     // }


//     //FOREACH
//     // listaDeProdutos.forEach(function(produto){
//     //     console.log ('Nome do produto: ' + produto)

//     // })

//     //Retorna o indice do elemento que foi encontrado
//     //Caso não exista o item buscado retorna -1
//     console.log(listaDeProdutos.indexOf('Impressora'));

//     //Retorna verdadeiro ou falso
//     console.log(listaDeProdutos.includes('Notebook'));

// }

// const filtrarProduto = function(nomeProduto) {
//     let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Precessador', 'HD'];
//     let nome = nomeProduto;

//     let status;

//     if (listaDeProdutos.indexOf(nome) >= 0)
//         status = true;
//     else
//         status = false;
//     // return listaDeProdutos.includes(nome);

//     listaDeProdutos.forEach(function(produto) {
//         if (produto.toLocaleUpperCase == nome.toLocaleUpperCase())
//             status = true;

//     })

//     return status;
// }

const manipulandoArrayJson = function() {
    // Wxistem diversos tipos de dados para integração de tecnologias:

    // XML <atributo> valor </atribulo> -----> Se tornou ultrapassado

    // JSON { atributo: valor }

    let contato = { nome: 'julia', telefone: '47728922', email: 'juju@.gmail.com' }
    let contato2 = { nome: 'Artemis', telefone: 907977578, email: 'artemis.sz@gmail.com' }
    let contato3 = { nome: 'marcela', telefone: '975456876', email: 'marcela.gmail.com' }

    let arrayContatos = [contato, contato2, contato3]

    // Criando novos atributos no Json de forma dinâmica

    contato.celular = '11 98460-4477'
    contato.data_nascimento = '02-28-2007'
    contato.idade = '16'
    console.log((contato))

    // console.log(('Número de telefone: ' + contato.telefone))
    // console.log(('Número de celular: ' + contato.celular))
    // console.log(('Nome: ' + contato.nome))
    // console.log(('Email: ' + contato.email))

    console.log(arrayContatos[0].celular)

    //Percorrendo Array e JSON

    arrayContatos.forEach(function(dados) {
        console.log('\n*****************************');
        console.log('Nome:' + dados.nome);
        console.log('Telefone:' + dados.telefone);
        console.log('Email:' + dados.email);

        //Tratamento para validar a impressão dos valores
        if (dados.celular != undefined)
            console.log('Celular:' + dados.celular);

    })
};
manipulandoArrayJson()

const produtosArrayJson = function() {
    let listaCores = [
        { id: 1, nome: 'Branco' },
        { id: 2, nome: 'Preto' },
        { id: 3, nome: 'Cinza' },
        { id: 4, nome: 'Amarelo' },
        { id: 5, nome: 'Azul' }
    ];
    let listaMarcas = [
        { id: 1, nome: 'Dell' },
        { id: 2, nome: 'Lenovo' },
        { id: 3, nome: 'Apple' },
        { id: 4, nome: 'Razer' },
        { id: 5, nome: 'Multilazer' },

    ];
    let listaCategorias = [
        { id: 1, nome: 'Hardware', descricao: 'Hardwae' },
        { id: 2, nome: 'Gamer', descricao: 'Gamer' },
        { id: 3, nome: 'Acessorios', descricao: 'Acessorios' },

    ]

    // cria um objeto do tipo JSON para o Array de produtos
    let JSONProdutos = {};

    //Cria um objeto do tipo ARRAY para guardar os produtos
    let ARRAYProdutos = [];

    //Objeto para criar os produtos
    let produto1 = {
        id: 1,
        nome: 'Mouse',
        descricao: 'Mouse optico com fio',
        categoria: listaCategorias[1],
        marca: listaMarcas[0],
        cor: [
            listaCores[0],
            listaCores[1],
            listaCores[2]
        ]

    };
    let produto2 = {
        id: 2,
        nome: 'Teclado',
        descricao: 'Teclado com fio padrão ABNT',
        categoria: listaCategorias[1],
        marca: listaMarcas[3],
        //tem todas as cores, logo nao precisa colocar indice por indice 
        cor: listaCores

    };
    let produto3 = {
        id: 3,
        nome: 'Gabinete',
        descricao: 'Gabinete com led',
        categoria: listaCategorias[2],
        marca: listaMarcas[3],
        cor: [
            listaCores[4],
            listaCores[5],
            listaCores[2]
        ]

    };

    let produto4 = {
        id: 4,
        nome: 'Monitor',
        descricao: 'Monitor',
        categoria: listaCategorias[2],
        marca: listaMarcas[2],
        cor: [
            listaCores[1],
            listaCores[5],
            listaCores[3]
        ]

    };
    let produto5 = {
        id: 5,
        nome: 'Fone',
        descricao: 'Fone de gatinho com led',
        categoria: listaCategorias[1],
        marca: listaMarcas[1],
        cor: listaCores

    };

    //adicionando os produtos no array produtos 
    //inclui produto no ARRAY .push
    ARRAYProdutos.push(produto1);
    ARRAYProdutos.push(produto2);
    ARRAYProdutos.push(produto3);
    ARRAYProdutos.push(produto4);
    ARRAYProdutos.push(produto5);


    JSONProdutos.produtos = ARRAYProdutos;
    JSONProdutos.count = ARRAYProdutos.length
        //significa que ta tudo ok, mostra que a requissição foi feita com sucesso
    JSONProdutos.status = 200;


    // console.log(JSONProdutos);
    //return 
    //nova função precisa ter o JSON 
    //nn pode fazer repetiçao em elementos json, só em array 

}
const produtosLivraria = function() {
        let listaLivros = [
            T
        ]

    }
    // produtosArrayJson();


//ARRAY CONCHETES, JSON CHAVES
// console.log(filtrarProduto('Notebook'));
// percorrendoArray();

// introducaoArray();


// console.log(filtrarProduto('Notebook'));
// percorrendoArray();

// introducaoArray();