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

const introducaoArray = function(){
    let listaDeNomes = ['José', 'Ana', 'Luiz', 'Maria', 'Carlos', 'Eduardo'];

    //exibe os dados do array
    console.log(listaDeNomes);

    //exibe os dados do array em formato de tabela
    console.table(listaDeNomes);

// retorna a quantidade de itens
    console.log(listaDeNomes.length);

// adiciona mais um elemento no final da lista
    listaDeNomes.push('Roberta');
    
    //adicionar no inicio da lista, mas altera a ordem
    listaDeNomes.unshift('Julia');
    console.table(listaDeNomes);

    //remove o ultimo elemento do array
    listaDeNomes.pop()

    //vai remover o elemento do inicio do array
    listaDeNomes.shift();

    //Remove um elemento baseado no indice, podendo definir a qntdade de itens a serem excluidos
    //EX: (2,3) -> 2 é a referencia do indice e 3 é referente a quantidade de itens

    //precisa falar o indice que vc quer remover e o quanto vc quer remover
    // 2,1 tira só os dois 2,3 tira 3 a partir da posição 2 

    listaDeNomes.splice(2,1);

    console.table(listaDeNomes);

    listaDeNomes.push('Andre da silva', 'Julia alves', 'Maria eduarda', 10);
    console.log(listaDeNomes);

    // tytpof - retorna o tipo de dados de um elemento
    console.log(typeof(listaDeNomes[7]));


    console.log(listaDeNomes[3]);

}


const percorrendoArray = function(){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Precessador', 'HD'];
    
    //WHILE
    // let cont = 0;
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do Produto:' + listaDeProdutos[cont]);
    //     cont +=1;
    // }

    
    //FOR
    // for(let cont=0; cont < listaDeProdutos.length; cont++){
    //     console.log('Nome do produto:' + listaDeProdutos [cont]);
    // }


    //FOREACH
    // listaDeProdutos.forEach(function(produto){
    //     console.log ('Nome do produto: ' + produto)

    // })

    //Retorna o indice do elemento que foi encontrado
    //Caso não exista o item buscado retorna -1
    console.log(listaDeProdutos.indexOf('Impressora'));

    //Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Notebook'));

}

const filtrarProduto = function(nomeProduto){
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Precessador', 'HD'];
    let nome = nomeProduto;

    let status;

    if(listaDeProdutos.indexOf(nome)>= 0)
    status = true;
    else
    status = false;
    // return listaDeProdutos.includes(nome);

    listaDeProdutos.forEach(function(produto){
        if(produto.toLocaleUpperCase == nome.toLocaleUpperCase())
        status = true;

    })

    return status;
}

    console.log(filtrarProduto('Mouse'));




// console.log(filtrarProduto('Notebook'));
// percorrendoArray();

//introducaoArray();