// Función para mostrar/ocultar las secciones cuando se presiona el botón
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    // Alterna entre mostrar y ocultar
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
