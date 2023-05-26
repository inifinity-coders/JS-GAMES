import './style.css'
import './Lotery'
import './Lotery/components/Card'
import './Lotery/components/TablePlayer'

const manzanas = ["🍎", "🍏", "🍎", "🍎", "🍏"];

manzanas.forEach(function(manzana) {
    console.log(`Me gusta la ${manzana}`);
});
/* En este ejemplo, estamos pasando una función anónima como argumento al método forEach. La función de devolución de llamada se ejecutará una vez para cada elemento de la matriz, y en cada iteración, la variable manzana tomará el valor del elemento actual. En este caso, la función de devolución de llamada simplemente imprime en la consola "Me gusta la " seguido del valor de la variable manzana.

Los "array methods" son muy útiles porque nos permiten realizar operaciones en 
una matriz de manera concisa y legible, sin tener que escribir bucles for complejos 
y repetitivos.

 */

// push: agrega un nuevo elemento al final de la matriz
manzanas.push("🍏");
console.log(manzanas); // ["🍎", "🍏", "🍎", "🍎", "🍏", "🍏"]

// pop: elimina el último elemento de la matriz
manzanas.pop();
console.log(manzanas); // ["🍎", "🍏", "🍎", "🍎", "🍏"]

// shift: elimina el primer elemento de la matriz
manzanas.shift();
console.log(manzanas); // ["🍏", "🍎", "🍎", "🍏"]

// unshift: agrega un nuevo elemento al principio de la matriz
manzanas.unshift("🍎");
console.log(manzanas); // ["🍎", "🍏", "🍎", "🍎", "🍏"]

// slice: devuelve una sección de la matriz como una nueva matriz
const manzanas2 = manzanas.slice(1, 3);
console.log(manzanas2); // ["🍏", "🍎"]

// splice: agrega o elimina elementos de la matriz en una posición determinada
manzanas.splice(1, 2, "🍏");
console.log(manzanas); // ["🍎", "🍏", "🍏"]

// forEach: ejecuta una función para cada elemento de la matriz
manzanas.forEach(manzana => console.log(`Me gusta la ${manzana}`));

// map: crea una nueva matriz con los resultados de una función aplicada a cada elemento de la matriz
const manzanas3 = manzanas.map(manzana => `Manzana ${manzana}`);
console.log(manzanas3); // ["Manzana 🍎", "Manzana 🍏", "Manzana 🍏"]

// filter: crea una nueva matriz con todos los elementos que pasan una prueba proporcionada por una función
const manzanas4 = manzanas.filter(manzana => manzana === "🍏");
console.log(manzanas4); // ["🍏", "🍏"]

const frutas = ["🍎", "🍏", "🍎", "🍌", "🍏", "🍐", "🍇"];

const conteoManzanas = frutas.reduce((total, fruta) => {
  if (fruta === "🍎" || fruta === "🍏") {
    return total + 1;
  } else {
    return total;
  }
}, 0);

console.log(`Hay ${conteoManzanas} manzanas en la matriz de frutas.`);