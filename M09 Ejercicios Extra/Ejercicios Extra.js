/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo = [];
   for (let key in objeto) {
       arreglo.push([key, objeto[key]]);
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let ArrayStr = string.split('');
   let obj = ArrayStr.reduce((obj, letra) => {
     obj[letra] ? obj[letra] += 1 : obj[letra] = 1;
     return obj;
   }, {});
   let arrayKeys = Object.keys(obj);
   arrayKeys = arrayKeys.sort();
   let objOrdenado = {};
   arrayKeys.forEach((letra)=>{
     objOrdenado[letra] = obj[letra];
   });
   return objOrdenado;
   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arregloStr = string.split('');
   var arreglo1 = [];
   var arreglo2 = [];
   for(var i = 0; i<arregloStr.length; i++){
      if(arregloStr[i] === arregloStr[i].toUpperCase()){
         arreglo1.push(arregloStr[i]);
      }else{
         arreglo2.push(arregloStr[i]);
      }
   }
   arr1 = arreglo1.join('');
   arr2 = arreglo2.join('');
   return arr1 + arr2;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var arrayFrase = frase.split(' ');
   var arrayFraseInvertida = arrayFrase.map((element)=>{
       return element.split('').reverse().join('');
   })
   return arrayFraseInvertida.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numStr = numero.toString();
   let numAlReves = numStr.split('').reverse().join('');
   return numStr === numAlReves ? "Es capicua" : "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var letras = [];
   letras = string.split('');
   var letrasDelete = letras.filter(letra =>{
       return letra != "a" && letra != "b" && letra != "c";
   })
   return letrasDelete.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   array = arrayOfStrings.sort((a, b) => a.length - b.length);
   return array;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let array3 = array1.filter(num => array2.includes(num));
   return array3;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
