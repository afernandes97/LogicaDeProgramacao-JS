/*Laços de Repetição
Afim de fazer operações repetitivas, o JavaScript oferece algumas opções de estruturas de repetições. 
Também chamados de laços ou loops.*/

/* While
O while é a estrutura que executa um código enquanto uma condição for verdadeira. Exemplo: */
let count = 1;

while (count <= 100){
    console.log(count);
    count++;    
}
// guardei o dia atual na variavel dia, o get.day retorna em numeros, de 1 a 7, sendo 1 segunda e 7 domingo

let dia = new Date().getDay();

if(dia == 5){
    dia = 'sexta feira'
}
while(dia == 'sexta feira'){
    console.log('hoje é sexta vamos beber')
    dia = 'fim'
    break
}
if(dia == 'fim'){
    console.log('estou bebado, vou para casa descansar')
}
/* A condição dada para a execução é count menor do que 100. Assim enquanto essa condição retornar true, 
o código será executado. Na linha 4 há a atualização da variável count, o ++ representa a operação em 
aumentar em 1 o valor da variável. Note que se não houvesse essa linha a condição nunca se tornaria falsa, 
uma vez que continuaria tendo valor 0. Neste caso o laço seria infinito. Preste sempre atenção para 
evitar esse tipo de cenário. Note também que se a condição for falsa logo de início, por exemplo se 
mudarmos a linha 1 para let count = 200;, o código dentro do while nunca seria executado. */


/* Do-While
Há casos em que é necessário executar o while pelo menos uma vez. Para isso temos a estrutura do-while, 
onde primeiro se executa o código e depois é verificado a condição para continuar executando ou não. 
O mesmo exemplo: */
let count2 = 1;

do{
    console.log(count2);
    count2++;
}while(count2 < 110);


/* For
O for é uma estrutura de repetição que é executado um número específico de vezes. 
Nele é declarado um variável com um valor inicial, depois é determinado a condição de parada e 
por fim a passo dado entre o valor inicial e o final. Exemplo: */
for(let i = 1; i<=100; i++){
    console.log(i);
}

/* A variável declarada é o i, onde esta é iniciada com valor 0. A condição de parada é ao i 
atingir valor 10, demonstrado em i < 10. Por fim, o i++ mostra que o i vai de 0 a 9 de em 
incrementos de um. Note que a variável declarado no for pode possuir qualquer nome. */