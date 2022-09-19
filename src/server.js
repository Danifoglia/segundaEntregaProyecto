import express from 'express'
const { Router } = express

import {
    productosDao as productosApi,
    carritosDao as carritosApi
} from './daos/index.js'

//------------------------------------------------------------------------
// instancio servidor

const app = express()

//--------------------------------------------
// permisos de administrador

const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    const error = {
        error: -1,
    }
    if (ruta && metodo) {
        error.descripcion = `ruta '${ruta}' metodo '${metodo}' no autorizado`
    } else {
        error.descripcion = 'no autorizado'
    }
    return error
}

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json(crearErrorNoEsAdmin())
    } else {
        next()
    }
}

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router()

productosRouter.get('/', async (req, res) => {
    const productos = await productosApi.listarAll();
    console.log(productos);
    res.send({productos: productos}); 
})

productosRouter.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await productosApi.listar(id);
        res.json({producto: producto});
    } catch (error) {
        res.json(`Error al buscar el id: ${id}, producto no encontrado`,error)
    }
})

productosRouter.post('/', soloAdmins, async (req, res) => {
    productosApi.guardar(req.body)
    res.status(200).res.json("producto cargado");
})

productosRouter.put('/:id', soloAdmins, async (req, res) => {
    try {
        const id = req.params.id;
        productosApi.actualizar(req.body, id);
    } catch (error) {
        res.json(`Error al buscar el id: ${id}, producto no encontrado`)
    }
})


productosRouter.delete('/:id', soloAdmins, async (req, res) => {
    try {
        const id = req.params.id;
        productosApi.borrar(id);
        } catch (error) {
        res.json(`Error al buscar el id: ${id}, producto no encontrado`)
    }
})

//--------------------------------------------
// configuro router de carritos

const carritosRouter = new Router()

carritosRouter.get('/', async (req, res) => {
    
})

carritosRouter.post('/', async (req, res) => {
    
})

carritosRouter.delete('/:id', async (req, res) => {
    
})

//--------------------------------------------------
// router de productos en carrito

carritosRouter.get('/:id/productos', async (req, res) => {
    
})

carritosRouter.post('/:id/productos', async (req, res) => {
    
})

carritosRouter.delete('/:id/productos/:idProd', async (req, res) => {
    
})

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

/app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

export default app