# Proyecto Módulo 3: Aplicación de Consola - Plataforma de Cursos Interactiva

## 📝 Descripción del Proyecto
Este proyecto es una aplicación interactiva desarrollada en JavaScript que se ejecuta en la consola del navegador web. Simula de forma lógica el backend de una plataforma educativa en línea. El sistema permite a los usuarios interactuar a través de un menú dinámico, explorar la oferta académica disponible, filtrar las opciones según su área de interés, gestionar un carrito de compras interactivo y procesar la facturación final aplicando cupones de descuento.

El objetivo principal de este desarrollo es consolidar y aplicar los fundamentos de programación estructurada, modularización, manipulación de colecciones y control de flujos de datos bajo buenas prácticas de legibilidad.

---

## 🚀 Funcionalidades Principales

1. **Catálogo de Cursos Estructurado:** Almacenamiento y gestión de la oferta académica mediante una lista de objetos independientes que contienen identificadores únicos, nombres, precios y categorías específicas.
2. **Filtrado Avanzado por Categoría:** Permite al usuario buscar áreas temáticas específicas (como *Programación* o *Diseño*). Incorpora un sistema de control ("bandera") para identificar búsquedas erróneas o categorías vacías, notificando al usuario en caso de no hallar coincidencias.
3. **Gestión Dinámica del Carrito de Compras:** Opción para agregar cursos al carrito de forma incremental mediante la lectura de su identificador numérico (ID).
4. **Cálculo de Facturación y Cupones:** Simulación de una pasarela de pago que calcula el subtotal de los cursos acumulados y evalúa códigos promocionales válidos (como `SENCE10` u `GRUPON20`) mediante operaciones aritméticas para arrojar el balance final a pagar.
5. **Validación de Entradas (Seguridad):** Control integrado de flujos mediante funciones de validación que evitan fallos de ejecución cuando el usuario ingresa datos nulos, caracteres alfabéticos incorrectos o cancela los cuadros de diálogo.

---

## ⚙️ Conceptos Técnicos Implementados

La arquitectura del código se distribuye siguiendo los lineamientos clave fijados para el módulo:

* **Estructuras de Datos Avanzadas:** * Uso de arreglos para listas e históricos de compras dinámicos (`cursosDisponibles`, `carrito`).
  * Implementación de un objeto de control (`cuenta`) para centralizar el estado de la compra, incorporando propiedades numéricas y un **método interno** (`calcularPrecioFinal`) para encapsular la lógica del descuento financiero.
* **Estructuras de Control de Flujo:**
  * Uso del ciclo `while` para sostener la interfaz del menú de forma indeterminada hasta que se decida salir.
  * Bucles tradicionales `for` e iteradores modernos (`forEach`) para recorrer de manera secuencial los elementos de las listas.
  * Bifurcaciones condicionales `if / else if` junto con estructuras de selección múltiple `switch` para el procesamiento del menú y los cupones.
* **Modularización (Funciones):** Segmentación de responsabilidades mediante funciones con parámetros y retornos claros (`calcularSubtotal`, `evaluarCupon`, `filtrarCursosPorCategoria`, `validarNumeroInput`), manteniendo el código limpio y mantenible.

---

## 💻 Instrucciones de Ejecución

Para ejecutar e interactuar con la aplicación, realice los siguientes pasos:

1. Abra el archivo `index.html` en su navegador web preferido (Google Chrome, Safari, Firefox, etc.).
2. **Paso fundamental:** Abra las Herramientas de Desarrollador antes de iniciar el sistema utilizando la combinación de teclas en su teclado:
   * En Mac: `Option (⌥) + Command (⌘) + J` (Chrome) o `Option (⌥) + Command (⌘) + C` (Safari).
   * En Windows/Linux: `F12` o `Ctrl + Shift + J`.
3. Interactúe con el menú utilizando las ventanas emergentes (`prompt` y `alert`) introduciendo los números de las opciones (1 al 5).
4. Monitoree las salidas impresas en tiempo real directamente sobre la pestaña **Consola (Console)** de su navegador para observar el catálogo completo, los filtros de búsqueda y los recibos de pago detallados.