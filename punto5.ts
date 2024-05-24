// Escribe una función llamada findCommonElements que acepte una lista de listas como parámetro y devuelva una lista
//  con los elementos comunes a todas las sub-listas.


const findCommonElements = (list: any[][]): any[] => {
  if (list.length === 0) return [];
  const commonElements = list[0].filter((element) => list.every((sublist) => sublist.includes(element)));
  return commonElements;
}

console.log(findCommonElements([[1, 2, 3], [2, 3, 4], [2, 5, 6]]));

// Funcion optimizada

const findCommonElements2 = (lists: any[][]): any[] => {
  if (lists.length === 0) return [];

  // Crear un Map para contar las ocurrencias de cada elemento
  const elementCount = new Map<any, number>();
  const numberOfLists = lists.length;

  // Recorrer cada sub-lista
  for (const list of lists) {
    const uniqueElements = new Set(list);

    for (const element of uniqueElements) {
      elementCount.set(element, (elementCount.get(element) || 0) + 1);
    }
  }

  // Filtrar los elementos que están presentes en todas las sub-listas
  // el metodo filter recibe un callback que recibe un array con dos elementos, el primero es el elemento y el segundo es el contador
  // si el contador es igual al numero de listas, entonces se agrega a la lista de elementos comunes
  // el metodo map recibe un array con dos elementos, el primero es el elemento y el segundo es el contador
  // se retorna solo el elemento
  const commonElements = Array.from(elementCount.entries())
    .filter(([element, count]) => count === numberOfLists)
    .map(([element, count]) => element);

  return commonElements;
}

console.log(findCommonElements2([[1, 2, 3], [2, 3, 4], [2, 5, 6]]));