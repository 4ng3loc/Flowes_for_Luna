// =====================================================
// CAMBIO 1: Evento de carga de la página
// =====================================================
// Esperamos a que toda la página termine de cargar
// y luego eliminamos la clase "container" del body.
//
// Esto reemplaza:
// onload = *()* =>{
//     document.body.classList.remove("container");
// };
// =====================================================

window.addEventListener("load", () => {
    document.body.classList.remove("container");
});