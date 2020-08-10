/* Funções de Alta Ordem
Em JavaScript, funções são cidadãos de primeira classe. O que significa que podem ser tratados como 
valores e salvo em variável. Portanto, naturalmente funções também podem ser passadas como parâmetro 
para uma função. Em resumo, uma função de alta ordem é uma função que recebe ou retorna uma função. */


//Recebendo uma Função como Parâmetro
const subtrair = (a,b) => a-b;
const somar = (a,b) => a+b;
const dividir = (a,b) => a/b;
const multiplicar = (a,b) => a*b;

const aplicaOperacao = (a,b,operacao) => operacao(a,b);

resultadoSubtrair = aplicaOperacao(4,2,subtrair);
resultadoSomar = aplicaOperacao(10,55,somar);
resultadoDividir = aplicaOperacao(55,15,dividir);
resultadoMultiplicar = aplicaOperacao(32,14, multiplicar);

//No código acima declaramos três funções, somar, subtrair e aplicarOperacao. 
//As duas primeiras recebem dois parâmetros e devolvem um valor. A aplicarOperacao recebe três parâmetros, 
//sendo o terceiro uma função a ser aplicada passando os dois primeiros parâmetros. Nas linhas 5 e 6 
//são passados, respectivamente, as funções somar e subtrair.

console.log(resultadoSubtrair);
console.log(resultadoSomar);
console.log(resultadoDividir);
console.log(resultadoMultiplicar);


/* Retornando Funções
Nós podemos retornar funções como uma forma de construir abstrações mais complexas, onde uma função 
é um geradora de funções. No exemplo a seguir, temos a função somarX, que recebe x de parâmetro 
e retorna uma função que recebe y e retorna x+y. Note que ao passar 2 para somarX, criamos uma 
função que soma 2. E assim sucessivamente. */

const somarX = (x) => (y) => x+y;
const somar2 = somarX(2);
const somar45 = somarX(45);
console.log(somar45(78));

//Nas próximas três aulas vamos estudar funções de alta ordem para vetores.
