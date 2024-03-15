const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')
const path = require('path')

//MULTER (PARA GUARDAR IMAGENES)
const multer = require('multer')

function createImageName(file) {
    return file.originalname.replace(path.extname(file.originalname), "") + '_' + Date.now() + path.extname(file.originalname)
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destFolder = path.join(__dirname, '../../public/images/products')
        cb(null, destFolder)
    },

    filename: (req, file, cb) => {
        const newFileName =  createImageName(file)
        cb(null, newFileName)
    }
})

const uploadFile = multer({ storage })

router.get('/', productsController.list)
router.get('/create', productsController.create)
router.post('/create', uploadFile.single('image'),productsController.updateCreate)
router.get('/:productId', productsController.detail)
router.get('/:productId/edit', productsController.edit)
router.put('/:productId/edit', productsController.updateEdit)

module.exports = router