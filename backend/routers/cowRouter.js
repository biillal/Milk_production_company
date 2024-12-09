

const router = require('express').Router()
const {getAllCows,addCow} = require('../controlleurs/cowContolleur')
const { addCowValidator } = require('../utility/validator/cowValidation')
router.get('/',getAllCows)
router.post('/add',addCowValidator,addCow)

module.exports = router