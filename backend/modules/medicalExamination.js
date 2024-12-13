const path = require('path')
const { readFile } = require('../utility/files');
const Cows = require('./Cow');
const medicalExaminationFile = path.join(__dirname, '../data/medicalExams.json')

class medicalExamination {
    static getAllmedicalExamination() {
        return readFile()
    }

    
}

module.exports = medicalExamination