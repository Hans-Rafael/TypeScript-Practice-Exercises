/* Enums y Funciones:
Combina enum con una función que reciba un valor del enum y devuelva una acción específica. */
enum NotificationType {
  Success = "SUCCESS",
  Error = "ERROR",
  Warning = "WARNING",
  Info = "INFO",
}
function handleNotification(notification: NotificationType): string {
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
// ejemplo 2
enum Accion {
  Saludar,
  Despedirse,
  Dormir,
}
function realizarAccion(accion: Accion): string {
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
