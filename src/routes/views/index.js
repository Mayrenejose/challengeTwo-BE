import { Router } from 'express'
import ProductManager from '../../models/productManager/index.js'

const router = Router()
const productManager = new ProductManager()

router.get('/', async(req, res) => {
    try {
        const dataProducts = await productManager.getAllProducts()

        res.render('home', {
            dataProducts,
            style: 'index.css',
            title: 'All products'
        })

    } catch (error) {
        res.status(500).send('error getting products')
    }
})

router.get('/:site', async(req, res) => {
    try {
        const params = req.params?.site
        const renderParameter = params === 'home' ? 'home' : 'realTimeProducts'
        const dataProducts = await productManager.getAllProducts()

        res.render(renderParameter, {
            dataProducts,
            style: 'index.css',
            title: 'All products'
        })

    } catch (error) {
        res.status(500).send('error getting products')
    }
})

export default router