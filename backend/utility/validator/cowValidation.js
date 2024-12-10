const { check } = require('express-validator')
const allowedBreeds = ['الهولشتاين،', 'املونتبليارد'];


exports.addCowValidator = [
    check('Date_of_entry')
        .isISO8601()
        .withMessage('تاريخ الدخول يجب أن يكون بتنسيق صحيح (YYYY-MM-DD)'),

    check('lineage')
        .isIn(allowedBreeds)
        .withMessage(`السلالة يجب أن تكون واحدة من: ${allowedBreeds.join(', ')}`),

]


exports.updateCowValidator = [

    check('Date_of_entry')
        .optional()
        .isISO8601()
        .withMessage('تاريخ الدخول يجب أن يكون بتنسيق صحيح (YYYY-MM-DD)'),

    check('lineage')
        .optional()
        .isIn(allowedBreeds)
        .withMessage(`السلالة يجب أن تكون واحدة من: ${allowedBreeds.join(', ')}`),

]

