//Modificadores de Acceso:
//Añade propiedades privadas y protegidas a una clase y crea métodos para interactuar con ellas.
class Animal2 {
  private energia: number; //solo accesible dentro de clase 'Animal'
  protected nombre: string; //Accesible dentro de 'Animal'y clases derivadas
  public edad: number; //Accesible desde cualquier lugar

  constructor(nombre: string, edad: number, energia: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.energia = energia;
  }

  // Método público para interactuar con `energia`
  public getEnergia(): number {
    return this.energia;
  }
  public setEnergia(nuevaEnergia: number): void {
    if (nuevaEnergia < 0) {
      console.error("La energía no puede ser negativa"); //throw new Error si quiero parar pero quiero continuar apesar del error
    }
    this.energia = nuevaEnergia;
  }
  public hacerSonido(): string {
    return "Hace un sonido";
  }
}
// clase derivada con metodos especificos
class Perro2 extends Animal2 {
  constructor(nombre: string, edad: number, energia: number) {
    super(nombre, edad, energia);
  }
  //metodo pa' interactuar con propiedad protegida 'nombre'
  public getNombre(): string {
    return `El nombre del perro es ${this.nombre} `;
  }
  public hacerSonido(): string {
    return "El perro ladra";
  }
}
class Gato2 extends Animal2 {
  constructor(nombre: string, edad: number, energia: number) {
    super(nombre, edad, energia);
  }
  public hacerSonido(): string {
    return "El gato maúlla";
  }
}