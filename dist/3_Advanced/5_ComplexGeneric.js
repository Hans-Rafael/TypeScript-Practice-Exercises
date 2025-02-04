"use strict";
class MemoryRepository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    findById(id) {
        return this.items.find((item) => item.id === id);
    }
    deleteById(id) {
        const index = this.items.findIndex((item) => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
    getAll() {
        return [...this.items];
    }
}
const userRepository = new MemoryRepository();
userRepository.add({ id: 1, name: "Alice" });
userRepository.add({ id: 2, name: "Bob" });
console.log("userRepository:", userRepository.getAll());
console.log("userRepository:", userRepository.findById(1));
console.log("userRepository:", userRepository.deleteById(2));
console.log("userRepository:", userRepository.getAll());
console.log("**** Example 2 ****");
const userRepo = new MemoryRepository();
userRepo.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepo.add({ id: 2, name: "Bob", email: "bob@example.com" });
console.log("userRepo:", userRepo.getAll());
console.log("userRepo:", userRepo.findById(2));
console.log("userRepo Deleted:", userRepo.deleteById(1));
console.log("userRepo:", userRepo.getAll());
console.log("***** example #3 *****");
const productRepo = new MemoryRepository();
productRepo.add({ id: "p1", name: "Laptop", price: 1200 });
productRepo.add({ id: "p2", name: "Mouse", price: 25 });
console.log(productRepo.getAll());
console.log(productRepo.findById("p1"));
productRepo.deleteById("p2");
console.log(productRepo.getAll());
