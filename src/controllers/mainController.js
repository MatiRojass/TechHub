const { productsData, findProduct } = require('../models/productsModel')
const { usersData, createUser  } = require('../models/usersModel')

const mainController = { 
    home: (req, res)=>{
        const products = productsData()
        res.render('home', { products })
    },
    register: (req, res)=>{
        res.render('register')
    },

    createUser: (req, res)=>{
        const user = req.body

        if(req.file){
            user.avatar = `/images/avatars/${req.file.filename}`
        }else{
            user.avatar = '/images/avatars/default-avatar.jpg'
        }

        createUser(user)

        res.redirect('/users')
    },

    about: (req, res)=>{
        res.render('about')
    },
    contact: (req, res)=>{
        res.render('contact')
    },
}
module.exports = mainController