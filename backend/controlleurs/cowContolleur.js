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
    const newCow = {
        Cow_number: req.body.Cow_number,
        Date_of_entry: req.body.Date_of_entry,
        lineage: req.body.lineage,
    }
    res.status(201).json(Cows.addCows(newCow))
}