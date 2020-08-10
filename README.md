# LogicaDeProgramacao-JS

Estudos adquiridos no curso de Web & React da Lets Code Academy https://letscode-academy.com/


### CONTEUDO ESCRITO - BASE ESTUDOS


## Variáveis

Variáveis são o conceito mais básico da programação. De forma super simplificada é atribuir um "apelido" 
a um valor. Isso permite que esse valor seja lido e modificado durante o programa.
No entanto, por baixo dos panos, seu programa está solicitando que o sistema operacional da sua máquina 
reserve um pedaço de memória RAM para guardar esse valor. Diferentes tipos de valor têm tamanhos diferentes. 
Por isso, o sistema precisa saber de antemão qual tipo utilizar.

Existem duas vertentes de linguagens que tratam isso de forma diferente:
Uma, a estática, obriga a variável ser de um tipo exclusivo de informação. Isto é, uma variável numérica 
é sempre numérica. Você pode alterar o número armazenado mas não pode mudar a informação para texto 
por exemplo. Geralmente essas linguagens exigem declarar o tipo ao criar a variável para reservar 
memória, mesmo que a variável ainda não tenha valor.

A segunda, a dinâmica, em que o tipo é inferido implicitamente e este pode ser mudado ao longo do código.
A memória só é alocada se a variável tiver um valor. Este é o caso de JavaScript.

O tipos de informação que podem ser salvos em variáveis são:

* Primitivos:

undefined -> Não há tipo nem valor

boolean -> verdadeiro ou falso

string -> textos

number -> números 

Complexos:

function -> funções

object -> objetos

Tipos primitivos são as informações básicas que uma linguagem consegue armazenar. 
Todas construção de dados mais complexos decorre da utilização desses. Também podem ser armazenados 
funções (muito importante) e objetos em variáveis. Os tipos primitivos são, números, texto 
(representado entre aspas) e booleano (valor lógico verdadeiro ou falso). O undefined representa 
uma variável sem valor atribuído.

/*Em JavaScript, temos um comportamento estranho das variáveis. Elas podem ser declaradas depois de 
utilizadas, pois elas são levantadas para o início do escopo. Isso se chama hoisting.

Usando var variáveis não respeitam seu escopo, uma variável declarada em uma função estará disponível 
depois do escopo da função.

Esses comportamentos são peculiares e diferentes de muitas linguagens, por isso padronizamos usar let 
em vez de var, o que fará com que os escopos sejam respeitados.

O const impede que o valor possa ser alterado após ser iniciado, gerando um erro ao ser tentado */


## Condicionais
### Operadores Lógicos
Em programação, condicionais são esturtura de decisões. O código executo de uma maneiro ou de outra a 
depender de uma condição, que por sua vez será interpretada como verdadeiro ou falso. Esse tipo de dado 
é chamado de booleano e possui valor true ou false. Uma condição é uma operação lógica que tem como 
resultado um valor booleano. 

* Os operadores de comparação em JavaScript são:

```
>	Maior	2 > 0	true
>=	Maior ou igual	2 >= 2	true
<	Menor	2 < 0	false
<=	Menor ou igual	2 <= 1	false
==	Igual	1 == '1'	true
===	Igual em valor e tipo	1 === '1'	false
!=	Diferente	1 != 2	true
!==	Diferente em valor ou tipo	'5' !== 5	false
```
* Os operadores lógicos em JavaScript são:
```
&&	E	2 > 0 && 1!==1	false
||	Ou	2 > 0 || 1!==1	true
!	Não	!(1===1)	false
```
Os operadores de comparação retornam um booleano a depender do resultado da comparação. E os operados 
lógicos fazem operações sobre valores booleano. O operador && só retorna verdadeiro se as duas 
condições forem verdadeira. Enquanto para o operador || basta uma das condições ser para o resultado 
ser verdadeiro. O operador ! inverte o valor lógico, ou seja, verdadeiro vira falso e vice-versa. 

* Operador Tenário
Para atribuição condicional de valor o JavaScript possui um operador que permite fazer uma if else 
inline, isto é, em uma única linha. Operador tenário é representado por ?

* Switch
O Switch é uma estrutura condicional que recebe um valor e executa um código quebrando os casos que a 
variável pode receber.

* O comando new Date().getDay() retorna o dia atual como um inteiro, começando em 0 no domingo e indo 
até 6 para o sábado. O switch recebe a variável e quebra casos. Caso seja 1, por exemplo, definimos a 
variável dia como "Segunda". O break representa o fim do case. Caso seja omitido o computador executará 
o caso seguinte. Por isso é dispensável no último caso. Ainda é possível definir um padrão caso nenhum 
dos casos exista usando o default.

* Truthy e Falsy - Além do true e do false, o JavaScript aceita outras informações que não são booleanos e os 
interpreta como se fosse true ou false. Esses casos chamamos de truthy e false.

/*JavaScript interpreta os seguintes valores como falso:
```
0
'' ou ""
null
undefined
NaN
Todos os demais são interpretados como verdadeiro. Alguns exemplos de truthy:

[]
{}
function(){}
Uma utilidade dessa característica é verificar se uma variável está definida antes de usá-la. 
Assim evitando erro.
```
### Laços de Repetição
Afim de fazer operações repetitivas, o JavaScript oferece algumas opções de estruturas de repetições. 
Também chamados de laços ou loops.*/

* While
O while é a estrutura que executa um código enquanto uma condição for verdadeira.

* Do-While
Há casos em que é necessário executar o while pelo menos uma vez. Para isso temos a estrutura do-while, 
onde primeiro se executa o código e depois é verificado a condição para continuar executando ou não. 

* For
O for é uma estrutura de repetição que é executado um número específico de vezes. 
Nele é declarado um variável com um valor inicial, depois é determinado a condição de parada e 
por fim a passo dado entre o valor inicial e o final.


## Vetores
Vetor é uma sequência ordenada de valores. Também é chamado pelo nome em inglês, array. 
É denotado pelo uso de colchetes, com os valores separados por vírgula.

//Também é possível declarar o vetor vazio e ir adicionando pela posição os elementos

* O for-of recebe um vetor e a variável declarada vai possuir os valores dos elementos do vetor. 
Assim percorrendo diretamente o array inteiro.

* A alternativa é o for-in, onde a variável declarada assume o valor dos índices do vetor passado: */

* Matrizes
Matrizes são vetores muiltidimencionais, isto é, é um vetor de vetores. Portanto tudo 
que se aplica a vetor também vale para matrizes. A declaração de uma matriz segue o padrão

* Vetores Dinâmicos
Em JavaScript vetores são estruturas de dados dinâmicas, isto é, de tamanho variável.


## Funções
Podemos ter duas interpretações do que são funções. A primeira de que uma função é um trecho de código 
em que damos um nome e que é executado a cada vez que é chamado.

* Formas de Declarar
Além da forma tradicional de declarar, há ainda duas formas de utilizar funções, que é usando do 
artifício de que em JavaScript funções são valores. */
```
// Usando function
function somar(a,b){
    return a + b;
}
let resultado = somar(10,30);
console.log(resultado)


// Atribuindo uma função anônima em constantes
const somar2 = function(a,b){return a+b;}
console.log(somar2(10,20));


// Atribuindo uma função de "flecha" em constantes
const somar3 = (a,b) => { return a+b}
console.log(somar3(22,33));



//Exemplos de funções de flecha:

const hello1 = () => "Hello World!";
const hello2 = (name) => "Hello " + name;
const hello3 = (name) => {return "Hello " + name;};
```

## Funções de Alta Ordem
Em JavaScript, funções são cidadãos de primeira classe. O que significa que podem ser tratados como 
valores e salvo em variável. Portanto, naturalmente funções também podem ser passadas como parâmetro 
para uma função. Em resumo, uma função de alta ordem é uma função que recebe ou retorna uma função.

* Retornando Funções
Nós podemos retornar funções como uma forma de construir abstrações mais complexas, onde uma função 
é um geradora de funções. No exemplo a seguir, temos a função somarX, que recebe x de parâmetro 
e retorna uma função que recebe y e retorna x+y. Note que ao passar 2 para somarX, criamos uma 
função que soma 2. E assim sucessivamente.


## Map
A função Map é o primeiro caso de aplicação de função de alta ordem que vamos ver. Essa 
função é usada para transformar vetores. Passamos uma função para o Map, e essa função é 
aplicada a cada item do vetor.

/*O map exige que seja passado pelo menos um parâmetro para a função. Então para usar métodos de um 
tipo específico de dado também é necessário fazer a declaração de uma função.*/


## Filter
Filter é uma função de alta ordem semelhante ao map, a diferença é que o objetivo do 
filter é filtrar elementos do vetor. Portanto a função passada para o deve receber o elemento 
e retornar um booleano. Se retorna true o elementor será mantido, senão retirado.


## Reduce
O objetivo reduce é reduzir um vetor a um valor ou objeto. Por exemplo, somar todos os elementos de 
um vetor é reduzir ele a um valor. O reduce é um pouco mais complexos que o map e o filter por que 
deve ser passado um parâmetro a mais.

* Vejamos o exemplo da soma:
```
const vetor2 = [1,2,3,4,5,6];

const soma1 = vetor2.reduce((estado, item) => estado + item);
```
* Além do elemento do vetor, é necessário passar a variável que vai armazenar a evolução do estado ao longo 
da aplicação da função no vetor. No caso podemos pensar nessa variável estado como um acumulador que guarda 
a soma parcial até o presente elemento da iteração. Assim, a função recebe a soma acumulada e o novo item, 
retornando o estado somado ao item. Esse valor então é passado como estado para o elemento seguinte. 
Ao percorrer todo o vetor, o valor dessa variável estado é retornado. O primeiro elemento não recebe um 
estado por ser o primeiro, então o segundo elemento recebe o primero como estado. Porém, é possível declarar 
explicitamente qual seria o estado inicial a ser passado para o primeiro elemento, basta passar como 
parâmetro para o reduce:

```
const vetor1 = [1,2,3,4,5,6];

const soma = vetor1.reduce((estado, item) => estado + item, 0);
```
/*Na linha 3 adicionamos o zero como estado inicial. Em casos simples como esse não será necessário 
declarar explicitamente, mas ao trabalhar com objetos é necessário.

Vamos fazer um exemplo com objetos, caso ainda não tenha familiaridade ainda retorne para reler esse 
trecho após o módulo de introdução a orientação a objeto.

Suponha que tenha um vetor de objetos aluno que possuem três atributos: nome, nota 1 e nota 2.
*/
```
let vetor = [
  { nome : 'nome1', nota1 : 5, nota2 : 4 },
  { nome : 'nome2', nota1 : 4, nota2 : 3 },
  { nome : 'nome3', nota1 : 7, nota2 : 8 },
  { nome : 'nome4', nota1 : 2, nota2 : 7 },
  { nome : 'nome5', nota1 : 9, nota2 : 9 },
];
```
/*Vamos usar o reduce para somar todas a notas 1 e 2 dos alunos. Para isso, declaramos primeiro 
o objeto a ser recebido como estado inicial:*/
```
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
 ```
/*Note que podemos escrever em linhas separadas para facilitar a escrita e leitura. Esse reduce, 
a cada rodada, cria um novo objeto que contém a somatória das notas do estado anterior com o valor 
das notas do item atual. Também contém um contador para cada nota para simplificar no cálculo de 
uma média posteriormente. Observe que o estado inicial foi passado por parâmetro depois da função no 
reduce. Sem ele não teríamos de onde tirar os valores que estão no objeto.*/


