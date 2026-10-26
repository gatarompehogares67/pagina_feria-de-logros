
const resultado = document.getElementById("resultado");
const boton = document.getElementById("btnDiagnostico");
const reloj = document.getElementById("reloj");

// Reloj en tiempo real
function actualizarReloj() {
    if (!reloj) return;
    reloj.textContent = new Date().toLocaleTimeString("es-SV", {
        hour12: false
    });
}

actualizarReloj();
setInterval(actualizarReloj, 1000);

// Diagnóstico demostrativo
function ejecutarDiagnostico() {
    boton.disabled = true;
    boton.textContent = "Analizando...";
    resultado.textContent = "Iniciando comprobaciones...";
    resultado.style.color = "#20b9ff";

    setTimeout(() => {
        resultado.innerHTML = `
            <strong>✓ Diagnóstico de demostración completado</strong>
            <br><br>
            ✓ Inspección visual: registrada<br>
            ✓ Mantenimiento preventivo: recomendado<br>
            ✓ Actualizaciones: verificar manualmente<br>
            ✓ Copias de seguridad: comprobar manualmente<br>
            ✓ Seguridad: revisar las medidas de protección
            <br><br>
            <strong>Recomendación:</strong>
            programa revisiones periódicas y registra las incidencias.
        `;

        resultado.style.color = "#38dc91";
        boton.disabled = false;
        boton.textContent = "Ejecutar nuevamente";
    }, 1800);
}
