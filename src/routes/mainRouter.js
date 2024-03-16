const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const multer = require('multer')
const path = require('path')

function createImageName(file) {
    return file.originalname.replace(path.extname(file.originalname), "") + '_' + Date.now() + path.extname(file.originalname)
}

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const destPath = path.join(__dirname, '../../public/images/avatars')
        cb(null, destPath)
    },

    filename: (req, file, cb) => {
        const fileName = createImageName(file)
        cb(null, fileName)
    }
})

const update = multer({storage})


router.get('/', mainController.home)
//CREATE USER
router.get('/register', mainController.register)
router.post('/register', update.single('avatar'), mainController.createUser)

router.get('/about', mainController.about)


module.exports = router