const express = require('express')
const app = express()
const path = require('path')
const mainRouter = require('./routes/mainRouter')
const PORT = '3000' 

app.listen(PORT, ()=>{
    console.log(`\tServidor funcionando\n\tURL: \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
})

app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.use('/', mainRouter)
