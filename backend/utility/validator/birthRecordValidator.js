const { check, param, body } = require('express-validator')


exports.addBirthRecordValidator = [
    body('date')
        .isISO8601()
        .withMessage('يوم الفحص يجب أن يكون بتنسيق صحيح (MM-DD-YYYY)'),

    body('Cow_number')
        .notEmpty()
        .withMessage("رقم بقرة الام لا يجب ان يكون فارغ"),

]


exports.updateBirthRecordValidator = [

    check('date')
        .optional()
        .isISO8601()
        .withMessage('تاريخ الدخول يجب أن يكون بتنسيق صحيح (YYYY-MM-DD)'),

    check('Cow_number')
        .optional()

]
