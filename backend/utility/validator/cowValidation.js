const { check } = require('express-validator')
const allowedBreeds = ['الهولشتاين،', 'املونتبليارد'];
exports.addCowValidator = [
    check('Cow_number')
        .notEmpty()
        .withMessage('Cow number is require'),

    check('Date_of_entry')
        .isISO8601()
        .withMessage('تاريخ الدخول يجب أن يكون بتنسيق صحيح (YYYY-MM-DD)'),

    check('lineage')
        .isIn(allowedBreeds)
        .withMessage(`السلالة يجب أن تكون واحدة من: ${allowedBreeds.join(', ')}`),

]