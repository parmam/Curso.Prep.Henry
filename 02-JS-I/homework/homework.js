// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "martin";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 15;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}
devolverString("martin");
function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  resultado = x + y;
  return resultado;
}
suma(10, 15);


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  resultado = x - y;
  return resultado
}
resta(15, 1);


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  resultado = x * y;
  return resultado;
}
multiplica(5, 4);


function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  resultado = x / y;
  return resultado
}
divide(100, 10);


function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) {
    console.log('es igual');
    return true;
  } else {
    console.log('es diferente')
    return false;
  }
}
sonIguales(33,11);


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length === str2.length) {
    console.log('misma longitud');   
    return true; 
  } else {
    console.log('diferente longitud');
    return false;
  }
}
tienenMismaLongitud('martin', 'parma');


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90) {
    console.log('menor que 90');
    return true;
  } else {
    console.log('mayor que 90');
    return false;
  }
}
menosQueNoventa(37);


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50) {
    console.log('es mayor');
    return true;
  } else {
    console.log('es menor');
    return false;
  }
}
mayorQueCincuenta(99);


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resultado = x % y;
  return resultado;
}
obtenerResto(99, 8);


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado = num % 2;
  if (resultado === 0) {
    console.log('es par');
    return true;
  } else {
    console.log('es impar');
    return false;
  }
}
esPar(45);


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var resultado = num % 2;
  if (resultado === 1) {
    console.log('es par');
    return true;
  } else {
    console.log('es impar');
    return false;
  }

}
esImpar(11);


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var resultado = Math.pow(num, 2);
  return resultado;
}
elevarAlCuadrado(5);


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var resultado = Math.pow(num, 3);
  return resultado;
}
elevarAlCubo(9);



function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var resultado = Math.pow(num, exponent);
  return resultado;
}
elevar(5,4);



function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
resultado = Math.round(num);
return resultado;
}
redondearNumero(153.55);


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  resultado = Math.ceil(num);
  return resultado;
}
redondearHaciaArriba(11.22);


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  resultado = Math.random();
  return resultado;
}



function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero === 0) {

    return false;
    
  } else {

    if (numero > 0) {
      return 'Es positivo';
      
    } else {
      return 'Es negativo';
    }
    
  }
}



function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var concatena = str + '!';
  return concatena;
}
agregarSimboloExclamacion('Hola');



function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var concatena = nombre +' '+ apellido;
  return concatena;
}
combinarNombres ('Martin', 'Parma');



function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saluda = 'Hola' +' '+ nombre + '!';
  return saluda;
}
obtenerSaludo('Martin');

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;
  return area;
}
obtenerAreaRectangulo(25, 33);



function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetro = lado * 4;
  return perimetro;
}
retornarPerimetro(15);



function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var area = base * altura;
  return area/2;
}
areaDelTriangulo(33, 11);



function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var cambio = euro * 1.20;
  return cambio;
}
deEuroAdolar(1151);




var vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí

  if (letra.length > 1) {
    return 'Dato incorrecto';
  } else {
    if (vocales.indexOf(letra) >= 0) {
      return 'Es vocal';
      
    } else {
      alert('no tiene vocales');
    }
  }
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
