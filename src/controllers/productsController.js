const { productsData, findProduct, createProduct, editProduct, deleteProduct } = require('../models/productsModel')


const productsController = {
    list: (req, res) => {
        const products = productsData()
        
        res.render('products/products', {products})
    },

    detail: (req, res) => {
        const product = findProduct(req.params.productId)

        if(product){
            res.render('products/productDetail', {product})
            console.log('producto encontrado')
        }else{
            res.send('producto no encontrado')
        }
    },

    create: (req, res) => {
        res.render('products/productCreate')
    },

    updateCreate: (req, res) => {
        const product = req.body
        product.image = `/images/products/${req.file.filename}`

        createProduct(product)
        
        res.redirect('/products')
    },

    edit: (req, res) => {
        const productId = req.params.productId; // Recupera el ID del producto de los parámetros de la URL
        const product = findProduct(productId);

        res.render('products/productEdit', { product })
    },

    updateEdit: (req, res) => {
        const id = req.params.productId
        const product = req.body

        editProduct(product, id)

        res.redirect('/products')
    },

    delete: (req, res) => {
        const id = req.params.productId

        deleteProduct(id)

        res.redirect('/products')
    }
}

module.exports = productsController