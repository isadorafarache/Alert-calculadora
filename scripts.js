/*
Pedir para o usuário digitar um número,                                   
Converter em número inteiro,                                   
Pedir para o usuário digitar outro número,                        
Converter em número inteiro,                       
Mostrar a subtração concatenando com o texto "a subtração é ..."                        
Fazer o mesmo com multiplicação e divisão.                        
*/

alert ("Agora vamos diminuir");
var n1 = prompt("Digite um número");
n1 = parseInt(n1);
var n2 = prompt("Digite outro número");
n2 = parseInt(n2);
alert ("A subtração é " + (n1 - n2) );

alert ("Agora vamos multiplicar");
var n1 = prompt("Digite um número");
n1 = parseInt(n1);
var n2 = prompt("Digite outro número");
n2 = parseInt(n2);
alert("A multiplicação é " + (n1 * n2) );

alert ("Agora vamos dividir");
var n1 = prompt("Digite um número");
n1 = parseInt(n1);
var n2 = prompt("Digite outro número");
n2 = parseInt(n2);
alert("A divisão é " + (n1 / n2) );

