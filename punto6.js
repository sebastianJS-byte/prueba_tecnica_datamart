function mergeSort(arr){
  // Creamos una variable que almacene la mitad del arreglo
  const mid = arr.length / 2;

  // Si el arreglo tiene menos de 2 elementos, retornamos el arreglo
  if(arr.length < 2){
    return arr;
  }

  // Creamos dos arreglos, uno con la mitad de la izquierda y otro con la mitad de la derecha
  const left = arr.splice(0, mid);
  // Llamamos recursivamente a la funcion mergeSort para que se sigan dividiendo los arreglos
  return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, rigt){
  // Creamos un arreglo vacio para almacenar los elementos ordenados
  let arr = [];

  // Mientras los arreglos tengan elementos, los comparamos y los agregamos al arreglo ordenado
  while(left.length && rigt.length){
    // Si el primer elemento del arreglo izquierdo es menor que el primer elemento del arreglo derecho, lo agregamos al arreglo ordenado
    if(left[0] < rigt[0]){
      arr.push(left.shift());
    }else{
      // Si no, agregamos el primer elemento del arreglo derecho al arreglo ordenado
      arr.push(rigt.shift());
    }
  }

  return [...arr, ...left, ...rigt]
}

console.log(mergeSort([1, 3, 2, 5, 4, 6, 7, 8, 9, 0]));