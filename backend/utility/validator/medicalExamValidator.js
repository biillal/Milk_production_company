const { check, param, body } = require('express-validator')


exports.addMedicalExamValidator = [
    param('Cow_number').exists().toInt(),

    body('date')
        .isISO8601()
        .withMessage('يوم الفحص يجب أن يكون بتنسيق صحيح (MM-DD-YYYY)'),

    body('disease')
        .notEmpty()
        .withMessage("المرض لا يجب ان يكون فارغ"),

]


exports.updateMedicalExamsValidator = [

    check('date')
        .optional()
        .isISO8601()
        .withMessage('تاريخ الدخول يجب أن يكون بتنسيق صحيح (YYYY-MM-DD)'),

    check('disease')
        .optional()

]
