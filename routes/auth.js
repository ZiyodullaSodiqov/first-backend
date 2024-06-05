const express = require('express')
const router = express.Router()
const auth = require('../controller/auth')

router.post('/create' , auth.add)
router.get('/all' , auth.getAll)
router.put('/:id' , auth.modelPut)
router.delete('/:id' , auth.modelDelete)

module.exports = router