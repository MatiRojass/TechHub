const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const productsModel = {
    file: path.join(__dirname, '../../data/products.json'),

    productsData: () => JSON.parse(readFileSync(productsModel.file)),

    findProduct: (id) => productsModel.productsData().find(product => product.id == id),

    updateProducts: (data) => writeFileSync(productsModel.file ,JSON.stringify(data, null, 1), 'utf-8'),

    createProduct: (product) => {
        const allProducts = productsModel.productsData()

        product.id = Date.now()

        allProducts.push(product)

        productsModel.updateProducts(allProducts)
    },

    editProduct: (newProduct, id) => {
        const product = productsModel.findProduct(id) 
        const allProducts = productsModel.productsData()
        const productIndex = allProducts.findIndex(product => product.id == id)

        allProducts[productIndex] = {...product, ...newProduct}

        productsModel.updateProducts(allProducts)
    },

    deleteProduct: (id) => {
        productsModel.updateProducts(productsModel.productsData().filter(product => product.id != id))
    }
}

module.exports = productsModel