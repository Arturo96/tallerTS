"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const producto_1 = __importDefault(require("./producto"));
const colors = require("colors");
class Celular extends producto_1.default {
    constructor(id, modelo, marca, precio, cantidad, procesador, ram, rom) {
        super(id, modelo, marca, precio, cantidad);
        this.procesador = procesador;
        this.ram = ram;
        this.rom = rom;
    }
    get getProcesador() {
        return this.procesador;
    }
    set setProcesador(procesador) {
        this.procesador = procesador;
    }
    get getRam() {
        return this.ram;
    }
    set setRam(ram) {
        this.ram = ram;
    }
    get getRom() {
        return this.rom;
    }
    set setRom(rom) {
        this.rom = rom;
    }
    toString() {
        return super.toString() +
            `    ${colors.blue('Procesador:')} ${this.procesador}
            Almacenamiento: ${this.rom} GB
            RAM: ${this.ram} GB`;
    }
}
exports.default = Celular;
