const MilkProduction = require('../modules/MilkProduction');
const { validationResult } = require('express-validator');

exports.getAllMilkProductions = (req, res) => {
  const productions = MilkProduction.getAllMilkProductions();
  res.status(200).json(productions);
};

exports.addMilkProduction = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const entries = MilkProduction.getAllMilkProductions();
  const nextId = entries.length > 0 ? Math.max(...entries.map((entry) => entry.id)) + 1 : 1;
  const { date, milkAmount } = req.body;

  const newEntry = {
    id: nextId,
    date,
    milkAmount
  };

  res.status(201).json(MilkProduction.addMilkProduction(newEntry));
};

exports.updateMilkProduction = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const id = parseInt(req.params.id);
  const updateData = req.body;
  const updatedEntry = MilkProduction.updateMilkProduction(id, updateData);

  if (updatedEntry) {
    res.status(200).json({ updatedEntry, message: 'تم تعديل إنتاج الحليب بنجاح' });
  } else {
    res.status(404).json({ message: 'السجل غير موجود' });
  }
};

exports.deleteMilkProduction = (req, res) => {
  const id = parseInt(req.params.id);
  const isDeleted = MilkProduction.deleteMilkProduction(id);

  if (isDeleted) {
    res.status(200).json({ message: 'تم حذف السجل بنجاح' });
  } else {
    res.status(404).json({ message: 'السجل غير موجود' });
  }
};
