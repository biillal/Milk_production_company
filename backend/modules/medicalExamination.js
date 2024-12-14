const path = require('path')
const { readFile, writeFile } = require('../utility/files');
const Cows = require('./Cow');
const medicalExaminationFile = path.join(__dirname, '../data/medicalExams.json')

class medicalExamination {
    static getAllmedicalExamination() {
        return readFile(medicalExaminationFile)
    }

    static addMedicalExamination(medicalCheck) {
        const medicalExm = this.getAllmedicalExamination();

        medicalExm.push(medicalCheck);
        writeFile(medicalExaminationFile, medicalExm);
        return { message: "تم إضافة الفحص الطبي بنجاح" };
    }

    static updateMedicalExam(id, updateData) {
        let MedicalExams = this.getAllmedicalExamination()
        const index = MedicalExams.findIndex(exams => exams.id === id)
        if (index === -1) return null;


        MedicalExams[index] = { ...MedicalExams[index], ...updateData }

        writeFile(medicalExaminationFile, MedicalExams)
        return MedicalExams[index]
    }

    static deletedMedicalExam(id) {
        let MedicalExams = this.getAllmedicalExamination();
console.log(MedicalExams);

        const newMedicalExam = MedicalExams.filter(exams => exams.id != id);
console.log(MedicalExams.length);
console.log(newMedicalExam.length);

        if (MedicalExams.length === newMedicalExam.length) {
            return false;
        }

        writeFile(medicalExaminationFile, newMedicalExam);
        return true;
    }

}

module.exports = medicalExamination