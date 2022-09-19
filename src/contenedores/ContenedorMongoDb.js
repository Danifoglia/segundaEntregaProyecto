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
        const objectSaveModel = new this.coleccion(nuevoElem);
        const savedObject = await objectSaveModel.save();
        console.log('Guardo este objeto en mongo', savedObject);

    }

    async actualizar(obj,id) {
        
        //const object = this.listar(id);
        const objectUpdate = await this.coleccion.updateOne({_id: id},{ $set: { title: obj.title, price: obj.price, thumbnail: obj.thumbnail}});
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