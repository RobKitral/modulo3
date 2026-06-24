/*
  PROYECTO MÓDULO 3
  Aplicación de Consola - Plataforma de Cursos Interactiva
 */


// 1. ESTRUCTURAS DE DATOS (Arreglos y Objetos)

// Objeto que representa las estadísticas del carrito utilizando un método interno
const cuenta = {
    totalItems: 0,
    descuentoAplicado: 0,
    // Método para calcular el precio final con descuento
    calcularPrecioFinal: function(subtotal) {
        return subtotal - (subtotal * this.descuentoAplicado);
    }
};

// Arreglo de objetos: Lista de cursos disponibles
const cursosDisponibles = [
    { id: 1, nombre: "JavaScript desde Cero", precio: 1500, categoria: "Programación" },
    { id: 2, nombre: "Desarrollo Web con HTML/CSS", precio: 1200, categoria: "Diseño" },
    { id: 3, nombre: "Git y GitHub", precio: 2000, categoria: "Programación" },
    { id: 4, nombre: "Bootstrap", precio: 1800, categoria: "Diseño" }
];

// Arreglo vacío para almacenar las compras del usuario (el carrito)
let carrito = [];

//
// 2. FUNCIONES MATEMÁTICAS Y DE MODULARIZACIÓN
// 

/*
  Función para calcular el subtotal de los elementos en el carrito.
  Parametros {Array} listaProductos - Arreglo de productos en el carrito.
  Devuelve {number} El subtotal acumulado.
 */
function calcularSubtotal(listaProductos) {
    let subtotal = 0;
    // Uso de un ciclo for para recorrer el arreglo del carrito
    for (let i = 0; i < listaProductos.length; i++) {
        subtotal += listaProductos[i].precio;
    }
    return subtotal;
}

/*
  Función para aplicar un descuento basado en un código de cupón.
  Utiliza una estructura condicional switch.
  Parametro {string} cupon - Código ingresado por el usuario.
  Devuelve {number} Porcentaje de descuento (ej: 0.10 para 10%).
 */
function evaluarCupon(cupon) {
    let porcentajeDescuento = 0;
    
    switch (cupon.toUpperCase()) {
        case "SENCE10":
            porcentajeDescuento = 0.10; // 10% de descuento
            alert("¡Cupón SENCE10 aplicado con éxito! Obtienes un 10% de descuento.");
            break;
        case "GRUPON20":
            porcentajeDescuento = 0.20; // 20% de descuento
            alert("¡Cupón GRUPON20 aplicado con éxito! Obtienes un 20% de descuento.");
            break;
        default:
            if (cupon !== "") {
                alert("El cupón ingresado no es válido.");
            }
            break;
    }
    return porcentajeDescuento;
}

/*
  Función que filtra y muestra en consola los cursos que pertenecen a una categoría específica.
  Parámetro {string} categoria - Categoría a buscar.
 */
function filtrarCursosPorCategoria(categoria) {
    let seEncontroCurso = false; //Bandera para verificar coincidencias

    console.log(`\n--- Cursos de la categoría: ${categoria} ---`);
    // Uso del método forEach para recorrer y filtrar el arreglo de objetos
    cursosDisponibles.forEach(function(curso) {
        if (curso.categoria.toLowerCase() === categoria.toLowerCase()) {
            console.log(`ID: ${curso.id} | ${curso.nombre} - $${curso.precio}`);
            seEncontroCurso = true; //Se encontró al menos uno
        }
    });
    //Después de recorrer el arreglo y la bandera sigue en False, aviso a usuario

    if (seEncontroCurso === false) {
        console.log("Ningún curso encontrado para esta categoría.");
        alert("Ningún curso encontrado. Intente con 'Programación' o 'Diseño'.");
    }
}

/*
  Función de validación para asegurar que el usuario ingrese un número válido.
  Parametro {string} valor - El dato ingresado originalmente como texto.
  Devuelve {boolean} - True si es un número válido, False si no.
 */
function validarNumeroInput(valor) {
    const numero = parseInt(valor);
    if (isNaN(numero) || numero <= 0) {
        return false;
    }
    return true;
}

// 
// 3. LOGICA PRINCIPAL Y MENÚ (Ciclos y Flujo)
// 

function iniciarAplicacion() {
    alert("¡Bienvenido a la Plataforma de Aprendizaje Interactivo!");
    console.log("Aplicación iniciada exitosamente.");
    
    let continuar = true;

    //Ciclo while para mantener el menú activo
    while (continuar) {
        let opcion = prompt(
            "Seleccione una opción escribiendo el número:\n" +
            "1. Ver todos los cursos disponibles\n" +
            "2. Filtrar cursos por categoría\n" +
            "3. Agregar un curso al carrito\n" +
            "4. Ver carrito y simular checkout total\n" +
            "5. Salir"
        );

        // Validación en caso de que cancelen el prompt
        if (opcion === null) {
            opcion = "5";
        }

        // if/else if para evaluar la opción del menú
        if (opcion === "1") {
            console.log("\n--- Catálogo Completo de Cursos ---");
            cursosDisponibles.forEach(curso => {
                console.log(`[ID: ${curso.id}] ${curso.nombre} (${curso.categoria}) - $${curso.precio}`);
            });
            alert("Catálogo enviado a la consola. Abre las herramientas de desarrollador (F12) para verlo.");

        } else if (opcion === "2") {
            let catSeleccionada = prompt("Ingrese la categoría que busca (Programación o Diseño):");
            if (catSeleccionada) {
                alert("Se mostrarán los cursos filtrados en consola.");
                filtrarCursosPorCategoria(catSeleccionada);
            } else {
                alert("Entrada inválida.");
            }

        } else if (opcion === "3") {
            let idInput = prompt("Ingrese el ID del curso que desea agregar al carrito:");
            
            // Validación de la entrada del usuario usando la función dedicada
            if (validarNumeroInput(idInput)) {
                let idCurso = parseInt(idInput);
                // Buscar si el ID existe en el arreglo de objetos
                let cursoEncontrado = cursosDisponibles.find(curso => curso.id === idCurso);

                if (cursoEncontrado) {
                    carrito.push(cursoEncontrado); // Agregar al arreglo carrito
                    cuenta.totalItems++;     // Modificar propiedad del objeto stats
                    alert(`¡"${cursoEncontrado.nombre}" fue agregado al carrito!`);
                } else {
                    alert("Error: El ID del curso no existe.");
                }
            } else {
                alert("Error: Por favor, ingrese un número de ID válido.");
            }

        } else if (opcion === "4") {
            if (carrito.length === 0) {
                alert("Tu carrito está vacío. Agrega cursos antes de realizar el checkout.");
            } else {
                console.log("\n--- Resumen de tu Carrito ---");
                carrito.forEach(item => console.log(`- ${item.nombre}: $${item.precio}`));
                
                // Llamada a función matemática dentro del proceso de cálculo
                let subtotal = calcularSubtotal(carrito);
                console.log(`Subtotal: $${subtotal}`);

                let cuponInput = prompt("¿Tienes un cupón de descuento? Dejar en blanco si no tienes (Prueba: SENCE10 o GRUPON20):");
                // Llamar una función dentro de las variables para optimizar
                cuenta.descuentoAplicado = evaluarCupon(cuponInput || "");

                // Uso del método del objeto para calcular el total
                let totalFinal = cuenta.calcularPrecioFinal(subtotal);
                
                console.log(`Total de ítems: ${cuenta.totalItems}`);
                console.log(`TOTAL A PAGAR: $${totalFinal}`);
                alert(`Resumen en consola.\nTotal de cursos: ${cuenta.totalItems}\nTotal a pagar: $${totalFinal}`);
            }

        } else if (opcion === "5") {
            alert("Gracias por usar la plataforma de aprendizaje. ¡Éxitos en tu estudio!");
            continuar = false; // Sale del ciclo while

        } else {
            alert("Opción no válida. Intente nuevamente.");
        }
    }
}
