import Producto from './producto';
import colors = require('colors');

export default class Celular extends Producto {

    private procesador: string;
    private ram: number;
    private rom: number;

    constructor(id: number, modelo: string, 
                marca: string, precio: number, 
                cantidad: number, procesador: string,
                ram: number, rom: number) {
            super(id, modelo, marca, precio, cantidad);
            this.procesador = procesador;
            this.ram = ram;
            this.rom = rom;

    }

    public get getProcesador() {
        return this.procesador;
    }

    public set setProcesador(procesador: string) {
        this.procesador = procesador;
    }

    public get getRam() {
        return this.ram;
    }

    public set setRam(ram: number) {
        this.ram = ram;
    }

    public get getRom() {
        return this.rom;
    }

    public set setRom(rom: number) {
        this.rom = rom;
    }

    public toString() {
        return super.toString() +
        `    ${colors.blue('Procesador:')} ${this.procesador}
            Almacenamiento: ${this.rom} GB
            RAM: ${this.ram} GB`;
    }


}