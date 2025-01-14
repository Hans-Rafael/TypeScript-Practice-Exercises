# TypeScript Practice Exercises

Welcome to the **TypeScript Practice Exercises** repository! This project is designed to help you improve and solidify your knowledge of JavaScript and TypeScript through hands-on exercises. The exercises are divided into three levels: **Basic**, **Intermediate**, and **Advanced**, each focusing on key concepts and skills.

---

## Repository Structure

The repository is organized into the following directories:

```
typescript-practice-exercises/
├── basic/         # Basic level exercises
├── intermediate/  # Intermediate level exercises
├── advanced/      # Advanced level exercises
├── README.md      # Documentation (this file)
└── tsconfig.json  # TypeScript configuration file
```

Each directory contains individual files for exercises, with clear instructions and comments in the code.

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/typescript-practice-exercises.git
   cd typescript-practice-exercises
   ```

2. **Install TypeScript globally (if not already installed):**

   ```bash
   npm install -g typescript
   ```

3. **Compile and run an exercise:**

   - Navigate to the exercise file you want to work on.
   - Compile it using `tsc`:
     ```bash
     tsc basic/exercise1.ts
     ```
   - Run the compiled JavaScript file:
     ```bash
     node basic/exercise1.js
     ```

---

## Exercise Levels

### 1. **Basic Level**

- Focus: Familiarize yourself with TypeScript basics like types, interfaces, enums, and basic functions.
- Number of Exercises: 8
- Examples:
  - Define and use basic types.
  - Create a function with explicit type annotations.
  - Work with arrays, tuples, and union types.

### 2. **Intermediate Level**

- Focus: Dive deeper into TypeScript features such as classes, generics, modules, and error handling.
- Number of Exercises: 10
- Examples:
  - Create and extend classes.
  - Use utility types like `Partial` and `Readonly`.
  - Implement asynchronous functions and promises.

### 3. **Advanced Level**

- Focus: Master advanced TypeScript concepts like decorators, mapped types, and integrating with external libraries or frameworks.
- Number of Exercises: 12
- Examples:
  - Create a custom decorator for a class.
  - Write a small Express.js application with TypeScript.
  - Use generics to build flexible and reusable components.

---

## tsconfig.json

The repository includes a pre-configured `tsconfig.json` file to ensure consistent TypeScript settings:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  },
  "include": ["./**/*.ts"]
}
```

Feel free to modify it as needed for your experiments.

---

## Contributing

If you'd like to contribute additional exercises or improvements:

1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with a clear description of your contribution.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Happy coding! 🚀

From Hans Garcia!
