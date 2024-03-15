const { productsData, findProduct } = require('../models/productsModel')

const mainController = { 
    home: (req, res)=>{
        const products = productsData()
        res.render('home', { products })
    },
    register: (req, res)=>{
        res.render('register')
    },
    about: (req, res)=>{
        res.render('about')
    },
    contact: (req, res)=>{
        res.render('contact')
    },
}
module.exports = mainController