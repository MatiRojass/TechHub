const { usersData, findUser } = require('../models/usersModel')

const usersController = {
    list: (req, res) => {
        const users = usersData()
        res.render('users/users', { users })
    },

    detail: (req, res) => {
        const user = findUser(req.params.userId)

        if(!user){
            res.send('El usuario no existe')
        }else{
            res.render('users/userDetail', {user})
        }
    }
}

module.exports = usersController