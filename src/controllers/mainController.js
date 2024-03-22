const { productsData, findProduct } = require('../models/productsModel')
const { usersData, createUser  } = require('../models/usersModel')
const { validationResult } = require('express-validator')

const mainController = { 
    home: (req, res)=>{
        const products = productsData()
        res.render('home/home.ejs', { products })
    },
    register: (req, res)=>{
        res.render('home/register')
    },

    createUser: (req, res)=>{
        // const user = req.body

        // if(req.file){
        //     user.avatar = `/images/avatars/${req.file.filename}`
        // }else{
        //     user.avatar = '/images/avatars/default-avatar.jpg'
        // }

        // createUser(user)

        // res.redirect('/users')

        const errors = validationResult(req)

        res.send(errors)
    },

    about: (req, res)=>{
        res.render('home/about')
    },
    contact: (req, res)=>{
        res.render('home/contact')
    },
}
module.exports = mainController