export default class Producto {

    private id: number;
    private modelo: string;
    private marca: string;
    private precio: number;
    private cantidad: number;

    constructor(id: number, modelo: string, 
                marca: string,
                precio: number, cantidad: number) {
            this.id = id;
            this.modelo = modelo;
            this.marca = marca;
            this.precio = precio;
            this.cantidad = cantidad;
    }

    public get getId() {
        return this.id;
    }

    public set setId(id: number) {
        this.id = id;
    }

    public get getModelo() {
        return this.modelo;
    }

    public set setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public get getMarca() {
        return this.marca;
    }

    public set setMarca(marca: string) {
        this.marca = marca;
    }

    public get getPrecio() {
        return this.precio;
    }

    public set setPrecio(precio: number) {
        this.precio = precio;
    }

    public get getCantidad() {
        return this.cantidad;
    }

    public set setCantidad(cantidad: number) {
        this.cantidad = cantidad;
    }

    public toString() {
        return `
            Id: ${this.id}
            Modelo: ${this.modelo}
            Marca: ${this.marca}
            Precio: ${this.precio}
            Cantidad: ${this.cantidad}
        `
    }

}