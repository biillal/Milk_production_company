

const router = require('express').Router()
const {getAllCows,addCow, update, deleted} = require('../controlleurs/cowContolleur')
const { addCowValidator, updateCowValidator } = require('../utility/validator/cowValidation')
router.get('/',getAllCows)
router.post('/add',addCowValidator,addCow)
router.put('/update/:id',updateCowValidator,update)
router.delete('/delete/:id',deleted)

module.exports = router