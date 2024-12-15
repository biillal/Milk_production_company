const { check } = require('express-validator');

exports.addMilkProductionValidator = [
  check('date')
    .isISO8601()
    .withMessage('يجب أن يكون التاريخ بتنسيق صحيح (YYYY-MM-DD)'),

  check('milkAmount')
    .isFloat({ min: 0 })
    .withMessage('يجب أن تكون كمية الحليب رقمًا موجبًا'),
];

exports.updateMilkProductionValidator = [
  check('date')
    .optional()
    .isISO8601()
    .withMessage('يجب أن يكون التاريخ بتنسيق صحيح (YYYY-MM-DD)'),

  check('milkAmount')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('يجب أن تكون كمية الحليب رقمًا موجبًا'),
];
