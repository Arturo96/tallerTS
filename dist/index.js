"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const celular_1 = __importDefault(require("./classes/celular"));
// import Producto from './classes/producto';
// let producto = new Producto(1, 'Redmi 9', 'Xiaomi', 500000, 100);
// // producto.setPrecio = producto.getPrecio + 50000;
// console.log(producto.getPrecio);
let celular = new celular_1.default(1, '6', 'Realme', 700000, 120, 'Mediatek Helio G90T', 4, 128);
console.log(celular.toString());
