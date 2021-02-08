/*
Desafio
Para ajudar a calcular as notas referentes às duas avaliações dos alunos, uma professora pediu para que você desenvolva um programa que calcule e imprima a média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.

Entrada
A entrada contém vários valores reais, positivos ou negativos. O programa deve ser encerrado quando forem lidas duas notas válidas.

Saída
Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo. O valor deve ser apresentado com duas casas após o ponto decimal.

 
Exemplo de Entrada  
-3.5
3.5
11.0
10.0

Exemplo de Saída
nota invalida
nota invalida
media = 6.75
*/



let nota1;
let nota2;
let temduas = false;

while (temduas == false) {
  let ver = parseFloat(gets())
  
  if (ver >= 0 && ver <= 10) {
    if (nota1 == null) {
      nota1 = ver;
    } else {
      nota2 = ver;
      temduas = true;
    }
  } else {
    console.log("nota invalida");
  }
}

let media = ((nota1 + nota2)/2).toFixed(2);
console.log(`media = ${media}`);