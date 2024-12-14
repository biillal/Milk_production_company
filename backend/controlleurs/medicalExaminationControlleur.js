const { validationResult } = require("express-validator");
const Cows = require("../modules/Cow");
const medicalExamination = require("../modules/medicalExamination");


exports.getAllmedicalExamination = (req, res) => {
    const medicalExaminations = medicalExamination.getAllmedicalExamination()
    res.status(201).json(medicalExaminations)
}

exports.addMedicalCheck = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { Cow_number } = req.params;
    const { date, disease } = req.body;

    const cows = await Cows.getAllCows();
    if (!cows || cows.length === 0) {
        return res.status(500).json({ message: "لا توجد بيانات للأبقار" });
    }

    const entries = medicalExamination.getAllmedicalExamination()
    const nextId = entries.length > 0 ? Math.max(...entries.map(entry => entry.id)) + 1 : 1;
    const medicalCheck = {
        id:nextId,
        Cow_number,
        date,
        disease
    };

    const index = cows.findIndex((cow) => cow.Cow_number == medicalCheck.Cow_number);

    if (index !== -1) {

        res.status(201).json(medicalExamination.addMedicalExamination(medicalCheck));

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
    const updateCow = medicalExamination.updateMedicalExam(id, updateData)

    if (updateCow) {
        res.status(201).json({ updateCow, message: "تم تعديل البقرة بنجاح" });

    } else {
        res.status(404).json({ message: 'البقرة غير موجودة' });
    }
}

exports.deleted = (req, res) => {
    const id = parseInt(req.params.id);

    const isDeleted = medicalExamination.deletedMedicalExam(id);

    if (isDeleted) {
        res.status(200).json({ message: "تم حذف البقرة بنجاح" });
    } else {
        res.status(404).json({ message: "البقرة غير موجودة" });
    }
};
