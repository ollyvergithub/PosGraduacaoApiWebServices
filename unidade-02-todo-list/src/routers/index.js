const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Get na raiz - Unidade 02 Todo List')
})

module.exports = router