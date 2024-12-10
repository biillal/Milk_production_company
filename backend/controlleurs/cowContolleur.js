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
    console.log(entries);
    
    console.log(Math.max(...entries.map(entry => entry.id)));
    
    const nextId = entries.length > 0 ? Math.max(...entries.map(entry => entry.Cow_number)) + 1 : 1;
    const newCow = {
        Cow_number: nextId,
        Date_of_entry: req.body.Date_of_entry,
        lineage: req.body.lineage,
    }
    res.status(201).json(Cows.addCows(newCow))
}

exports.update = (req, res) => {
    const Cow_number = parseInt(req.params.id);
    const updateData = req.body
    const updateCow = Cows.updateCow(Cow_number,updateData)
    console.log(updateCow + "aa");
    console.log(req.body + "req body");
    
    if (updateCow) {
        res.status(201).json({updateCow,message:"تم تعديل البقرة بنجاح"});
        
    } else {
        res.status(404).json({ message: 'البقرة غير موجودة' });
    }
}



