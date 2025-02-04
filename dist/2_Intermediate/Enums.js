"use strict";
var NotificationType;
(function (NotificationType) {
    NotificationType["Success"] = "SUCCESS";
    NotificationType["Error"] = "ERROR";
    NotificationType["Warning"] = "WARNING";
    NotificationType["Info"] = "INFO";
})(NotificationType || (NotificationType = {}));
function handleNotification(notification) {
    switch (notification) {
        case NotificationType.Success:
            return "✅ Operación completada con éxito.";
        case NotificationType.Error:
            return "❌ Se ha producido un error.";
        case NotificationType.Warning:
            return "⚠️ Advertencia: Revise los datos ingresados.";
        case NotificationType.Info:
            return "ℹ️ Información importante para el usuario.";
        default:
            return "🤷‍♂️ No se reconoce el tipo de notificación";
    }
}
console.log(handleNotification(NotificationType.Success));
console.log(handleNotification(NotificationType.Error));
var Accion;
(function (Accion) {
    Accion[Accion["Saludar"] = 0] = "Saludar";
    Accion[Accion["Despedirse"] = 1] = "Despedirse";
    Accion[Accion["Dormir"] = 2] = "Dormir";
})(Accion || (Accion = {}));
function realizarAccion(accion) {
    switch (accion) {
        case Accion.Saludar:
            return "¡Hola!";
        case Accion.Despedirse:
            return "Adiós!";
        case Accion.Dormir:
            return "Buenas noches";
        default:
            return "Acción no reconocida";
    }
}
console.log(realizarAccion(Accion.Saludar));
console.log(realizarAccion(Accion.Despedirse));
console.log(realizarAccion(Accion.Dormir));
