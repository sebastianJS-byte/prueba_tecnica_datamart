// Escribe una función llamada isAnagram que acepte dos cadenas de texto como parámetros y determine si son anagramas
//  (es decir, si tienen exactamente las mismas letras, pero en diferente orden).

const isAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;
  const str1Sorted = str1.split('').sort().join('');
  const str2Sorted = str2.split('').sort().join('');
  return str1Sorted === str2Sorted;
}


console.log(isAnagram('amor', 'roma')); // true
console.log(isAnagram('hola', 'aloh')); // true
