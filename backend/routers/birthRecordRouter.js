const { getAllBirthRecords, addBirthRecord, update, deleted } = require('../controlleurs/birthRecordsControlleur');
const { addBirthRecordValidator, updateBirthRecordValidator } = require('../utility/validator/birthRecordValidator');

const router = require('express').Router()

router.get('/',getAllBirthRecords)
router.post('/add',addBirthRecordValidator,addBirthRecord);
router.put('/update/:id',updateBirthRecordValidator,update);
router.delete('/delete/:id',deleted);


module.exports = router