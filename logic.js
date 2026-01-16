function determinarEstado(nota) {
    if (typeof nota !== 'number' || isNaN(nota)) {
        return "ERROR: Debe ser un número";
    }

    if (nota < 0 || nota > 100) {
        return "ERROR: Nota inválida";
    }

    if (nota >= 70) {
        return "APROBADO";
    }

    return "REPROBADO";
}

if (typeof module !== 'undefined') {
    module.exports = { determinarEstado };
}
