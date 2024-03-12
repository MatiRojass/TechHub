const mainController = { 
    home: (req, res)=>{
        res.render('home')
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