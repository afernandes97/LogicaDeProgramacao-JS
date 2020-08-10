/* Funções
Podemos ter duas interpretações do que são funções. A primeira de que uma função é um trecho de código 
em que damos um nome e que é executado a cada vez que é chamado. Exemplo: */
function escreva(texto){
    console.log(texto);
}

escreva('meu primeiro parametro');

escreva('meu segundo parametro')


/* Criamos um função usando o function e demos o nome geradorNumerico. 
É uma função que apenas imprime no console os número de 0 a 100. Cada vez que é chamada a função, 
o seu código é executado. Para tornar a função mais reutilizável, podemos parametrizá-la. Para isso, 
adicionamos os parâmetros na declaração. */
// Definindo a função
function geradorNumerico(num_ini, num_fim){
    for(let i = num_ini; i <= num_fim; i++){
        console.log(i)
    }
}

const geradorNumericoDez = (comeco,fim) => {
    for(let i = comeco; i <= fim; i+=100){
        console.log(i);
    }
}
// Chamando a função
//Entre os parêntesis adicionamos a declaração de duas, variáveis comeco e fim. 
//De forma que a função imprime os números entre esses dois valores.
geradorNumerico(1,15);
geradorNumericoDez(0,1000)

/* Formas de Declarar
Além da forma tradicional de declarar, há ainda duas formas de utilizar funções, que é usando do 
artifício de que em JavaScript funções são valores. */

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

console.log(hello1());
console.log(hello2('Andre'));
console.log(hello3('Dezao'));
//Note que não é possível fazer qualquer restrição de tipo de entrada como parâmetro de uma função. Caso seja passado algo que não era esperado, possivelmente quebrará o código. Fique atento.







