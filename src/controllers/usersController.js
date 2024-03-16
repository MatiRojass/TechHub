const { usersData, findUser } = require('../models/usersModel')

const usersController = {
    list: (req, res) => {
        const users = usersData()
        console.log(users)
        res.render('users', { users })
    },

    detail: (req, res) => {
        const user = findUser(req.params.userId)

        if(!user){
            res.send('El usuario no existe')
        }else{
            res.render('userDetail', {user})
        }
    }
}

module.exports = usersController