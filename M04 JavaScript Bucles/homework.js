/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if(x<y){
      resultado = y;
   } else{
      resultado = x;
   }
   return resultado;
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if (edad >= 18) {
      result = "Allowed";
   }else{
      result = "Not allowed";
   }
   return result;
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   switch (status) {
      case 1:
         result = "Online";
         break;
      case 2:
         result = "Away";
         break;
      default:
         result ="Offline";
         break;
   }
   return result;
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   switch (idioma) {
      case "aleman":
         result = "Guten Tag!";
         break;
      case "mandarin":
         result = "Ni Hao!";
         break;
      case "ingles":
         result = "Hello!";
         break;
      default:
         result ="Hola!";
         break;
   }
   return result;
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch (color) {
      case "blue":
         result = "This is blue";
         break;
      case "red":
         result = "This is red";
         break;
      case "green":
         result = "This is green";
         break;
      case "orange":
         result = "This is orange";
         break;
      default:
         result ="Color not found";
         break;
   }
   return result;
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   result = num=="10" || num =="5";
   return result;
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   result = num < 50 && num > 20;
   return result;
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   result = num === Math.round(num);
   return result;
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if(num%3 == 0 && num%5 == 0){
      result = "fizzbuzz";
   }else if(num%3 == 0){
            result = "fizz";
         }else if(num%5 == 0){
                  result = "buzz";
               }else{
                  result = false;
   }
   return result;

}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   if(num1==0 && num2==0 && num3==0){
      result = "Error";
   }else{
      if(num3>num1 && num3>num2){
         result = num3 + 1;
      }else{
         if(num1>num2 && num1>num3 && num1 > 0){
            result = "Numero 1 es mayor y positivo";
         }else{
            if(num1<0 || num2<0 || num3<0){
               result = "Hay negativos"
            }else{
               result= false;
            }
         }
      }
   }
   return result;
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   if(num<1){
      result = false;
   }else{
      for(i=2;i<num;i++){
         if(num%i == 0 && num!=i){
            result = false;
            break;
         }else{
            result = true;
         }
      }
   }
   return result;
 }

function esVerdadero(valor) {
  // Si "valor" es verdadero retornar "Soy verdadero".
  // Caso contrario, retornar "Soy falso".
  // Tu código:
  if(valor){
    result="Soy verdadero"
  }else{
    result="Soy falso"
  }
  return result;

}

function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  num = num.toString();
  if(num.length != 3){
    result = false;
  }else{
    result = true;
  }
  return result;
}

function doWhile(num) {
  // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
  // Retornar el valor final.
  // Utilizar el bucle Do-While.
  // Tu código:
  var i = 0;
  do {
    i += 1;
    num += 5;
  } while (i < 8);
  return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
