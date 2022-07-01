function comparanumeros(num1, num2) {
    const primeirafrase = criarprimeirafrase(num1, num2);
    const segundafrase = criasegundafrase(num1,num2);

    return`${primeirafrase} ${segundafrase}`;
}

function criarprimeirafrase(num1, num2) {
    let saoiguais = '';

    if (num1 !== num2) {
        saoiguais = 'não';
    }

    return `os numeros ${num1} e ${num2} ${saoiguais} são iguais`; 
}

function criasegundafrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(resultado10){
        resultado10 = 'maior';
    }
    if(resultado20){
        resultado20 ='maior'
    }

    return `sua nota é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(comparanumeros(1, 2)); /*aqui voce insere os numeros para ser comparados*/

