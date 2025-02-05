/* Testing:
Escribe un test con Jest para probar una función que valide un formulario. */
// install first jest: npm install --save-dev jest @types/jest ts-jest
//si no se instala de manera automatica (jest.config.js) hacerlo de manera manual
//NOTA: si estoy usando ESModules el archivo de config seria: jest.config.mjs 
//ESModules, necesitas declarar "type": "module" en tu package.json
//Aveces si hay otro file.test y se borra queda aun en la cache en window para borrar cache ejecutar: rm -rf dist
//configuración :
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
//eEcribir una función simple que valide un formulario
//Puede ser en src/10_validator.ts 
interface FormData {
    name: string;
    email: string;
  }
  
  export const validateForm = (data: FormData): string[] => {
    const errors: string[] = [];
  
    if (!data.name) {
      errors.push('Name is required');
    }
  
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.push('Email is invalid');
    }
  
    return errors;
  };
//Luego en: src/10_validator.test.ts Escribir un test  
/* 
import { validateForm } from './10_validator';

describe('validateForm', () => {
  it('should return an error if name is missing', () => {
    const result = validateForm({ name: '', email: 'test@example.com' });
    expect(result).toContain('Name is required');
  });

  it('should return an error if email is invalid', () => {
    const result = validateForm({ name: 'John Doe', email: 'invalid-email' });
    expect(result).toContain('Email is invalid');
  });

  it('should return no errors if form is valid', () => {
    const result = validateForm({ name: 'John Doe', email: 'john.doe@example.com' });
    expect(result).toEqual([]);
  });

  it('should return both errors if both fields are invalid', () => {
    const result = validateForm({ name: '', email: 'invalid-email' });
    expect(result).toContain('Name is required');
    expect(result).toContain('Email is invalid');
  });
}); 
*/
//Ejecutar tus tests
//npx jest

//Resultados esperados:
/* 
PASS  src/validator.test.ts
  validateForm
    ✓ should return an error if name is missing (x ms)
    ✓ should return an error if email is invalid (x ms)
    ✓ should return no errors if form is valid (x ms)
    ✓ should return both errors if both fields are invalid (x ms)
    */