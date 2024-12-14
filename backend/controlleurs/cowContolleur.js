const Cows = require("../modules/Cow")
const { validationResult } = require('express-validator');

exports.getAllCows = (req, res) => {
    const cows = Cows.getAllCows()
    res.status(201).json(cows)
}

exports.addCow = (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const entries = Cows.getAllCows()
    const nextId = entries.length > 0 ? Math.max(...entries.map(entry => entry.id)) + 1 : 1;
    const Cow_number = req.body.Cow_number;
    const Date_of_entry = req.body.Date_of_entry;
    const lineage = req.body.lineage;
    const newCow = {
        id: nextId,
        Cow_number,
        Date_of_entry,
        lineage
    }
    const index = entries.findIndex((cow) => cow.Cow_number === Cow_number);
    
    if (index !== -1) {
        res.status(401).json({message:"Cow number is used"})
    } else {
        res.status(201).json(Cows.addCows(newCow))
    }
}

exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = parseInt(req.params.id);
    const updateData = req.body
    const updateCow = Cows.updateCow(id, updateData)

    if (updateCow) {
        res.status(201).json({ updateCow, message: "تم تعديل البقرة بنجاح" });

    } else {
        res.status(404).json({ message: 'البقرة غير موجودة' });
    }
}

exports.deleted = (req, res) => {
    const id = parseInt(req.params.id);

    const isDeleted = Cows.deletedCow(id);

    if (isDeleted) {
        res.status(200).json({ message: "تم حذف البقرة بنجاح" });
    } else {
        res.status(404).json({ message: "البقرة غير موجودة" });
    }
};

