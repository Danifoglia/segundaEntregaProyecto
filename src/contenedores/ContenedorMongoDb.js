import mongoose from 'mongoose'
import config from '../config.js'
//import { productosDao } from '../daos/index.js';

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options)

class ContenedorMongoDb {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async listar(id) {
        const objectRead = await this.coleccion.findOne({_id: id});
        return objectRead;
    }

    async listarAll() {
        const objectRead = await this.coleccion.find();
        return objectRead;
    }

    async guardar(nuevoElem) {
        console.log(nuevoElem);
        const objectSaveModel = new this.coleccion({...nuevoElem,date: new Date().toLocaleString()});
        const savedObject = await objectSaveModel.save();
        console.log('Guardo este objeto en mongo', savedObject);

    }

    async actualizar(obj,id) {
        
        //const object = this.listar(id);
        const objectUpdate = await this.coleccion.updateOne({_id: id},{ $set: {...obj}});
        console.log(objectUpdate);
       
    }

    async borrar(id) {
        const objectDelete = await this.coleccion.deleteOne({_id: id});
        return objectDelete;
    }

    async borrarAll() {
        const object = this.listar(id);
        
    }
}

export default ContenedorMongoDb