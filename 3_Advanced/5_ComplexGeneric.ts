/* 5. Generics Complejos:
Crea un repositorio en memoria genérico que permita agregar, buscar y eliminar objetos de cualquier tipo */
class MemoryRepository<T extends { id: number | string}>{
    private items: T[] = [];
    //Agregar un obj al repositorio.
    add(item: T): void {
        this.items.push(item);
    }
    //Buscar un obj por su id.
    findById(id: number | string): T | undefined {
        return this.items.find((item) => item.id === id);
    }
    //Eliminar un obj por su id.
    deleteById(id: number | string): boolean {
        const index = this.items.findIndex((item) => item.id=== id);
         if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
    //Obtener todos los obj del repositorio.
    getAll(): T[] {
        return [...this.items];// Devolvemos una copia para evitar modificaciones externas
    }
}
//Ejemplo de Uso #1
const userRepository = new MemoryRepository<{ id: number; name: string }>();
userRepository.add({ id: 1, name: "Alice" });
userRepository.add({ id: 2, name: "Bob" });
console.log("userRepository:", userRepository.getAll());
console.log("userRepository:", userRepository.findById(1));
console.log("userRepository:", userRepository.deleteById(2));
console.log("userRepository:", userRepository.getAll());

//#2
console.log("**** Example 2 ****")
type User2 ={
    id: number;
    name: string;
    email: string;
}
const userRepo = new MemoryRepository<User2>();
userRepo.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepo.add({ id: 2, name: "Bob", email: "bob@example.com" });
console.log("userRepo:", userRepo.getAll()); //  
console.log("userRepo:", userRepo.findById(2)); // { id: 2, name: 'Bob', email: 'bob@example.com' }
console.log("userRepo Deleted:", userRepo.deleteById(1));
console.log("userRepo:", userRepo.getAll());// 

//#3
console.log ("***** example #3 *****")
type Product = {
    id: string;
    name: string;
    price: number;
  };
  
  const productRepo = new MemoryRepository<Product>();
  
  productRepo.add({ id: "p1", name: "Laptop", price: 1200 });
  productRepo.add({ id: "p2", name: "Mouse", price: 25 });
  
  console.log(productRepo.getAll()); // 🔥 [{ id: "p1", name: "Laptop", price: 1200 }, { id: "p2", name: "Mouse", price: 25 }]
  console.log(productRepo.findById("p1")); // 🔥 { id: "p1", name: "Laptop", price: 1200 }
  
  productRepo.deleteById("p2");
  console.log(productRepo.getAll()); // 🔥 [{ id: "p1", name: "Laptop", price: 1200 }]
  