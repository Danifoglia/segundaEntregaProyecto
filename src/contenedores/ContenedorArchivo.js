import * as fs from 'fs'
import config from '../config.js'

class ContenedorArchivo {

    constructor(ruta) {
        this.ruta = `${config.fileSystem.path}/${ruta}`;
    }

    async listar(id) {
        
    }

    async listarAll() {
        try {
            console.log(this.ruta);
            let productos = await fs.readFileSync(this.ruta, 'utf-8');
            console.log(productos);
            return JSON.parse(productos);
        } catch (error) {
            console.error("No hay nada en el archivo",error);
            return [];
    }   
    }

    async guardar(obj) {
        let result = await this.listarAll();
        console.log(result);
        result.push(obj);
        fs.writeFileSync(this.ruta, JSON.stringify(result,null,2));
    }

    async actualizar(elem) {
        
    }

    async borrar(id) {
        
    }

    async borrarAll() {
        
    }
}


export default ContenedorArchivo