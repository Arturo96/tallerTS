"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(id, modelo, marca, precio, cantidad) {
        this.id = id;
        this.modelo = modelo;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    get getId() {
        return this.id;
    }
    set setId(id) {
        this.id = id;
    }
    get getModelo() {
        return this.modelo;
    }
    set setModelo(modelo) {
        this.modelo = modelo;
    }
    get getMarca() {
        return this.marca;
    }
    set setMarca(marca) {
        this.marca = marca;
    }
    get getPrecio() {
        return this.precio;
    }
    set setPrecio(precio) {
        this.precio = precio;
    }
    get getCantidad() {
        return this.cantidad;
    }
    set setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
    toString() {
        return `
            Id: ${this.id}
            Modelo: ${this.modelo}
            Marca: ${this.marca}
            Precio: ${this.precio}
            Cantidad: ${this.cantidad}
        `;
    }
}
exports.default = Producto;
