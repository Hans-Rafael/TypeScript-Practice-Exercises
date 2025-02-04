/* Configuración Avanzada:
Modifica el archivo tsconfig.json para incluir diferentes entornos (dev y prod). */
/* 
/my-project
 ├── src/
 ├── tsconfig.json        # Configuración base
 ├── 7_tsconfig.dev.json    # Configuración para desarrollo
 ├── 7_tsconfig.prod.json   # Configuración para producción
 ├── package.json
 ├── dist/                # Archivos compilados
 */
//Archivo tsconfig.json (Base)
//Este archivo contendrá configuraciones comunes para todos los entornos:

/* Archivo tsconfig.dev.json (Modo Desarrollo)
Aquí activamos configuraciones útiles para el desarrollo, como sourceMap para depuración.
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "sourceMap": true,  // Habilita mapas de código fuente para depuración
    "noUnusedLocals": false, // Permite variables sin usar (útil en dev)
    "noUnusedParameters": false
  }
}
Para compilar en modo desarrollo:
bash o terminal:
tsc -p 7_tsconfig.dev.json
mejor dicho por ubicacion: npx tsc -p 3_Advanced/7_tsconfig.dev.json
*/
/* Archivo tsconfig.prod.json (Modo Producción)
Aquí optimizamos la compilación y eliminamos configuraciones innecesarias para producción.
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "sourceMap": false,  // No generamos mapas para reducir tamaño
    "noUnusedLocals": true, // Limpia variables no usadas
    "noUnusedParameters": true,
    "removeComments": true  // Elimina comentarios en el código final
  }
} 
  Para compilar en modo producción:
bash o terminal:
tsc -p 7_tsconfig.prod.json
*/

/*
***Mas comunes compiler Option con explicacion corta: ******
{
  "compilerOptions": {
    "outDir": "./dist", // Directorio donde se generarán los archivos compilados.
    "rootDir": "./src", // Directorio raíz del código fuente TypeScript.
    "noEmit": false, // Si es `true`, TypeScript no generará archivos JavaScript al compilar.
    
    "declaration": true, // Genera archivos `.d.ts` con declaraciones de tipos para facilitar el uso en otros proyectos.
    "declarationMap": true, // Genera mapas de declaraciones `.d.ts.map` para mejor depuración.
    "sourceMap": true, // Crea archivos `.map` que permiten hacer debugging en el código TypeScript original.
    
    "removeComments": false, // Mantiene los comentarios en los archivos compilados.
    
    "noImplicitAny": true, // Genera un error si una variable no tiene un tipo explícito y TypeScript le asignaría `any`.
    "strictNullChecks": true, // No permite asignar `null` o `undefined` a variables que no lo acepten explícitamente.
    "strictFunctionTypes": true, // Hace que la comprobación de tipos en funciones sea más estricta.
    "strictPropertyInitialization": true, // Exige que todas las propiedades de una clase sean inicializadas antes de su uso.
    "strictBindCallApply": true, // Refuerza los tipos de `bind`, `call` y `apply` en funciones.
    "noImplicitThis": true, // Genera un error si `this` tiene un tipo implícito `any`.
    "noImplicitReturns": true, // Exige que todas las funciones devuelvan un valor explícito en todos los caminos de ejecución.
    
    "alwaysStrict": true, // Fuerza `use strict` en todos los archivos TypeScript.
    
    "noUnusedLocals": true, // Genera errores si hay variables locales no utilizadas.
    "noUnusedParameters": true, // Genera errores si hay parámetros de función no utilizados.
    
    "noImplicitUseStrict": false, // Si es `true`, **desactiva** la inserción automática de `"use strict"`, pero `alwaysStrict` ya lo fuerza.
    
    "noFallthroughCasesInSwitch": true, // Previene que un `case` en un `switch` pase al siguiente sin un `break`.
    
    "inlineSourceMap": true, // Incluye el `sourceMap` directamente en los archivos `.js` generados en lugar de un archivo separado.
    "inlineSources": true, // Incluye los archivos TypeScript en los `sourceMap` generados.
    
    "experimentalDecorators": true, // Habilita el uso de decoradores en clases.
    
    "skipLibCheck": true, // Evita comprobar archivos de declaración de bibliotecas para acelerar la compilación.
    "forceConsistentCasingInFileNames": true // Fuerza consistencia en mayúsculas/minúsculas en nombres de archivo importados.
  }
}

 */



