

const router = require('express').Router()
const {getAllCows,addCow, update} = require('../controlleurs/cowContolleur')
const { addCowValidator, updateCowValidator } = require('../utility/validator/cowValidation')
router.get('/',getAllCows)
router.post('/add',addCowValidator,addCow)
router.put('/update/:id',updateCowValidator,update)

module.exports = router