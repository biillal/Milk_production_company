const router = require('express').Router();

const { getAllMilkProductions, addMilkProduction, updateMilkProduction, deleteMilkProduction } = require('../controlleurs/milkProductionController');
const {
  addMilkProductionValidator,
  updateMilkProductionValidator,
} = require('../utility/validator/milkProductionValidator');

router.get('/', getAllMilkProductions);
router.post('/add', addMilkProductionValidator, addMilkProduction);
router.put('/update/:id', updateMilkProductionValidator, updateMilkProduction);
router.delete('/delete/:id', deleteMilkProduction);

module.exports = router;
