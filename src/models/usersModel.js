const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const usersModel = {
    file: path.join(__dirname, '../../data/users.json'),

    usersData: () => JSON.parse(readFileSync(usersModel.file)),

    findUser: (id) => usersModel.usersData().find(user => user.id == id),

    updateUsers: (data) => writeFileSync(usersModel.file ,JSON.stringify(data, null, 1), 'utf-8'),

    createUser: (user) => {
        const allUsers = usersModel.usersData()

        user.id = Date.now()

        allUsers.push(user)

        usersModel.updateUsers(allUsers)
    }
}

module.exports = usersModel