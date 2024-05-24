# Solución para la Prueba Técnica

Esta es la solución para la prueba técnica. Para ser más interactivo, he dividido los puntos en distintos archivos dependiendo de su complejidad. He implementado tanto métodos propios del lenguaje como funciones manuales para la comparativa de qué es más óptimo usar y qué hace el desarrollo más productivo.

Las pruebas de Python están divididas en archivos `.ipynb` para que sea más interactivo y poder ver el paso a paso del desarrollo. En un caso agrege la libreria Pydantic por sus beneficios.

## Pydantic

Pydantic es una biblioteca de validación de datos y configuración en Python que se basa en el uso de anotaciones de tipo. Entre los beneficios de usar Pydantic se incluyen:

- **Validación Automática**: Permite la validación automática de datos basándose en las anotaciones de tipo, lo que reduce errores y garantiza que los datos cumplen con las expectativas antes de ser procesados.
- **Mejor Rendimiento**: Comparado con otras bibliotecas de validación, Pydantic es extremadamente rápido y eficiente, haciendo uso de la generación de código y el análisis estático.
- **Manejo de Datos Complejos**: Pydantic puede manejar estructuras de datos complejas y anidadas con facilidad, permitiendo validar y transformar datos de manera robusta y flexible.

## Estructura del Proyecto

- `punto123.ipynb`: Solución para el primer, segundo y tercer punto.
- `punto4.ts`: Solución para el cuarto punto.
- `punto5.ts`: Solución para el quinto punto con explicaciones paso a paso.
- `punto6.js`: Solución para el sexto punto.
- `point78.ipynb`: Solución para el séptimo punto con explicaciones paso a paso.

Cada archivo contiene la implementación y las pruebas correspondientes para cada punto de la prueba técnica.

## Instrucciones para Ejecutar

1. Clona el repositorio a tu máquina local.
2. Instala las dependencias necesarias:
   ```bash
   pip install pydantic
3. Instala typescript de manera global 
  ```bash
  npm i -g typescript
4. Con el comando `tsc archivo.ts` compilas el arcivo a un .js
5. Usando `node archivo.js` ejecutas el archivo creado en el paso anterior
6. Para el punto5 se puede usar este comando para compilar `tsc --target es2016 --lib es2016,dom punto5.ts`

Muchas gracias de antemano!

