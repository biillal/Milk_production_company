const { getAllmedicalExamination, addMedicalCheck, deleted, update } = require('../controlleurs/medicalExaminationControlleur')
const { addMedicalExamValidator, updateMedicalExamsValidator } = require('../utility/validator/medicalExamValidator')


const router = require('express').Router()

router.get('/',getAllmedicalExamination)
router.post('/cows/:Cow_number/birth-records',addMedicalExamValidator,addMedicalCheck);
router.put('/update/:id',updateMedicalExamsValidator,update);
router.delete('/delete/:id',deleted);


module.exports = router