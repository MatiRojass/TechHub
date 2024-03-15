const { productsData, findProduct, createProduct } = require('../models/productsModel')


const productsController = {
    list: (req, res) => {
        const products = productsData()
        
        res.render('products', {products})
    },

    detail: (req, res) => {
        const product = findProduct(req.params.productId)

        if(product){
            res.render('productDetail', {product})
            console.log('producto encontrado')
        }else{
            res.send('producto no encontrado')
        }
    },

    create: (req, res) => {
        res.render('productCreate')
    },

    updateCreate: (req, res) => {
        const product = req.body
        product.image = `images/products/${req.file.filename}`

        createProduct(product)
        
        res.redirect('/products')
    },

    edit: (req, res) => {
        const productId = req.params.productId; // Recupera el ID del producto de los parámetros de la URL
        const product = findProduct(productId);

        res.render('productEdit', { product })
    },

    updateEdit: (req, res) => {
        res.redirec('/products')
    },

    delete: (req, res) => {
        
    }
}

module.exports = productsController