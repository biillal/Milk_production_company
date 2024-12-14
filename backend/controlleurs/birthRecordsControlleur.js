const { validationResult } = require("express-validator");
const Cows = require("../modules/Cow");
const BirthRecords = require("../modules/BirthRecords");


exports.getAllBirthRecords = (req, res) => {
    const birthRecords = BirthRecords.getAllBirthRecords()
    res.status(201).json(birthRecords)
}

exports.addBirthRecord = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { date, Cow_number } = req.body;

    const cows = await Cows.getAllCows();
    if (!cows || cows.length === 0) {
        return res.status(500).json({ message: "لا توجد بيانات للأبقار" });
    }

    const entries = BirthRecords.getAllBirthRecords()
    const nextId = entries.length > 0 ? Math.max(...entries.map(entry => entry.id)) + 1 : 1;
    const birthRecord = {
        id:nextId,
        Cow_number,
        date
    };

    const index = cows.findIndex((cow) => cow.Cow_number == birthRecord.Cow_number);

    if (index !== -1) {
        res.status(201).json(BirthRecords.addBirthRecords(birthRecord));
    } else {
        res.status(404).json({ message: "لم يتم العثور على البقرة" });
    }
};

exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = parseInt(req.params.id);
    const updateData = req.body
    const updateCow = BirthRecords.updateBirthRecord(id, updateData)

    if (updateCow) {
        res.status(201).json({ updateCow, message: "تم تعديل البقرة بنجاح" });

    } else {
        res.status(404).json({ message: 'البقرة غير موجودة' });
    }
}

exports.deleted = (req, res) => {
    const id = parseInt(req.params.id);

    const isDeleted = BirthRecords.deletedBirthRecord(id);

    if (isDeleted) {
        res.status(200).json({ message: "تم حذف البقرة بنجاح" });
    } else {
        res.status(404).json({ message: "البقرة غير موجودة" });
    }
};
