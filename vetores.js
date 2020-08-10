/* Vetores
Vetor é uma sequência ordenada de valores. Também é chamado pelo nome em inglês, array. 
É denotado pelo uso de colchetes, com os valores separados por vírgula. Exemplo: */
let vetor = [10,20,30,40,50];
vetor[2] = 451;
console.log(vetor[2])

//Também é possível declarar o vetor vazio e ir adicionando pela posição os elementos
let vetor2 = [];

for(let i = 0; i <= 100; i++){
    vetor2.push(i)
   
}
console.log(vetor2)


/*Percorrendo o Vetor
Usando a estrutura de repetição for é possível percorrer todos os elementos de um vetor:*/

let vetor3 = [1,2,3,4,5,6,7,8,9,10]

//O i do for vai do valor 0 até o comprimento do vetor. 
//Note que vetor.length retorna o comprimento do mesmo.
for (let i = 0; i < vetor3.length; i++){
    console.log(vetor3[i])
}


/* Há ainda dois laços for especiais que permitem percorrer um vetor com maior facilidade. O for-of: */

const vetor4 = [10,20,30,40,50]
//O for-of recebe um vetor e a variável declarada vai possuir os valores dos elementos do vetor. 
//Assim percorrendo diretamente o array inteiro.
for (let numero of vetor4){
    console.log(numero);
}


/* A alternativa é o for-in, onde a variável declarada assume o valor dos índices do vetor passado: */

const vetor5 = [10,25,30,45,50]

for (let indice in vetor5){
    console.log(indice, vetor5[indice]);
}


/* Matrizes
Matrizes são vetores muiltidimencionais, isto é, é um vetor de vetores. Portanto tudo 
que se aplica a vetor também vale para matrizes. A declaração de uma matriz segue o padrão */


let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
//Para percorrer os elementos de uma matriz é necessário aninhar laços for. 
//O primeiro para percorrer as linhas e o segundo os elementos dessa linha.
for (let linha of matriz){
    for (let elemento of linha){
        console.log(elemento)
    }
}


/* Vetores Dinâmicos
Em JavaScript vetores são estruturas de dados dinâmicas, isto é, de tamanho variável. 


Para adicionar um elemento ao final do vetor, faça: */
let vetor6 = [10,20,30,40,50];
let novo_elemento = 60;

vetor6.push(novo_elemento);

//Para remover do final:
let vetor7 = [10,20,30,40,50];
vetor7.pop();

//Para adicionar ao começo:
let vetor8 = [25,35,55,67,58]
let novo_elemento1 = 10;

vetor8.unshift(novo_elemento1);

//Para remover do começo:
let vetor9 = [1,25,12,457,145]
vetor9.shift();