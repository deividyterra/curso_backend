let resultado;
const numero = 10;

if(numero >= 0 && numero < 9){
    resultado = "Número maior ou igual a zero e menor que 9";
} else if (numero >= 10 && numero < 33){
    resultado = "Número maior ou igual a 10 e menor que 33";
} else {
    resultado = "Ressultado é maior que 32";
}

console.log(resultado);