//Función simple que valida un formulario

interface FormData {
  name: string;
  email: string;
}
//function flecha
export const validateForm = (data: FormData): string[] |true  => {
    const errors: string[] = [];
  
    if (!data.name) {
      errors.push("Name is required");
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.push("Email is invalid");
    }
  
    return errors.length > 0 ? errors : true; // ✅ Devuelve `true` si no hay errores
  };  
//ejemplo de uso
const formData: FormData = { name: "", email: "invalid-email" };
const validationErrors = validateForm(formData);
console.log(validationErrors);
