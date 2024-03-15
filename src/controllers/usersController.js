const usersController = {
    list: (req, res) => {
        res.send('lista de usuarios')
    },

    detail: (req, res) => {
        res.send('detalle usuario ' + req.params.userId)
    }
}

module.exports = usersController