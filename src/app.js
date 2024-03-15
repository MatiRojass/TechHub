const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const PORT = '3000' 

app.listen(PORT, ()=>{
    console.log(`\tServidor funcionando\n\tURL: \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
})

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(methodOverride('_method'))

const mainRouter = require('./routes/mainRouter')

//RUTAS PRINCIPALES
app.use('/', mainRouter)

//RUTAS USUSARIOS
const usersRoutes = require('./routes/usersRouter')
app.use('/users', usersRoutes)

//RUTAS PRODUCTOS
const productsRouter = require('./routes/productsRouter')
app.use('/products', productsRouter)

// app.use((req,res,next) => {
//     res.status(404).render('not-found')
// })


