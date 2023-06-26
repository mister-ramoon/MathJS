console.group("Cuadrados");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({ladoCuadrado, perimetroCuadrado, areaCuadrado});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}

console.groupEnd('Cuadrados');

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log({perimetroTriangulo, areaTriangulo});

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

function calcularAlturaTriangulo(lado1, base) {
    if(lado1 === base) {
        console.log('Este no es un triangulo isosceles');
    } else {
        return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
    }
}

function trianguloEscaleno(lado1, lado2, base) {
    const semiPerimetro = (lado1 + lado2 + base) / 2;
    const altura = (2/lado1) * Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - base));
    
    if (lado1 === lado2 || lado1 === base || lado2 === base) {
        console.log('Este no es un triangulo escaleno');
    }
    else {
        return Math.round(altura);
    }
}

console.groupEnd("Triangulos");

console.group("Circulos");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({radioCirculo, diametroCirculo, PI, circunferencia, areaCirculo});

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioCuadrado = Math.pow(radio, 2);
    
    return {
        circunferencia: diametro * PI.toFixed(2),
        area: radioCuadrado * PI.toFixed(2)
    }
}

console.groupEnd("Circulos");
