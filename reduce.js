/*Reduce
O objetivo reduce é reduzir um vetor a um valor ou objeto. Por exemplo, somar todos os elementos de 
um vetor é reduzir ele a um valor. O reduce é um pouco mais complexos que o map e o filter por que 
deve ser passado um parâmetro a mais. Vejamos o exemplo da soma:
*/

const vetor2 = [1,2,3,4,5,6];

const soma1 = vetor2.reduce((estado, item) => estado + item);

/*Além do elemento do vetor, é necessário passar a variável que vai armazenar a evolução do estado ao longo 
da aplicação da função no vetor. No caso podemos pensar nessa variável estado como um acumulador que guarda 
a soma parcial até o presente elemento da iteração. Assim, a função recebe a soma acumulada e o novo item, 
retornando o estado somado ao item. Esse valor então é passado como estado para o elemento seguinte. 
Ao percorrer todo o vetor, o valor dessa variável estado é retornado. O primeiro elemento não recebe um 
estado por ser o primeiro, então o segundo elemento recebe o primero como estado. Porém, é possível declarar 
explicitamente qual seria o estado inicial a ser passado para o primeiro elemento, basta passar como 
parâmetro para o reduce:
*/


const vetor1 = [1,2,3,4,5,6];

const soma = vetor1.reduce((estado, item) => estado + item, 0);
/*Na linha 3 adicionamos o zero como estado inicial. Em casos simples como esse não será necessário 
declarar explicitamente, mas ao trabalhar com objetos é necessário.

Vamos fazer um exemplo com objetos, caso ainda não tenha familiaridade ainda retorne para reler esse 
trecho após o módulo de introdução a orientação a objeto.

Suponha que tenha um vetor de objetos aluno que possuem três atributos: nome, nota 1 e nota 2.
*/
let vetor = [
  { nome : 'nome1', nota1 : 5, nota2 : 4 },
  { nome : 'nome2', nota1 : 4, nota2 : 3 },
  { nome : 'nome3', nota1 : 7, nota2 : 8 },
  { nome : 'nome4', nota1 : 2, nota2 : 7 },
  { nome : 'nome5', nota1 : 9, nota2 : 9 },
];
/*Vamos usar o reduce para somar todas a notas 1 e 2 dos alunos. Para isso, declaramos primeiro 
o objeto a ser recebido como estado inicial:*/

const estadoInicial = { 
    somaNota1 : 0, 
    somaNota2 : 0, 
    qtdNota1 : 0, 
    qtdNota2 : 0,
  };
//Em seguida passamos como parâmetro para o reduce:
  
  const result = vetor.reduce((estado, valor) => {
    return {
        somaNota1 : estado.somaNota1 + valor.nota1,
        somaNota2 : estado.somaNota2 + valor.nota2,
        qtdNota1 : estado.qtdNota1 + 1,
        qtdNota2 : estado.qtdNota2 + 1
    };
  }, estadoInicial);

  console.log(result)
/*Note que podemos escrever em linhas separadas para facilitar a escrita e leitura. Esse reduce, 
a cada rodada, cria um novo objeto que contém a somatória das notas do estado anterior com o valor 
das notas do item atual. Também contém um contador para cada nota para simplificar no cálculo de 
uma média posteriormente. Observe que o estado inicial foi passado por parâmetro depois da função no 
reduce. Sem ele não teríamos de onde tirar os valores que estão no objeto.*/


let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let resultado = matriz.reduce(
    (acumulador,linha,indice) => acumulador + linha[indice]
,0);

console.log(resultado);


let matriz2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let resultado2 = matriz2.reduce(
    (estado,item) => [
        estado[0]+item[0],
        estado[1]+item[1],
        estado[2]+item[2]
    ]
);
console.log(resultado2);

let matriz3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let resultado3 = matriz3.map(
    linha => linha.reduce((estado,item)=>estado+item)
)
console.log(resultado3)