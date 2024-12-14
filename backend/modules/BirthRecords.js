const path = require('path')
const { readFile, writeFile } = require('../utility/files');
const Cows = require('./Cow');
const birthRecordsFile = path.join(__dirname, '../data/births.json')

class BirthRecords {
    static getAllBirthRecords() {
        return readFile(birthRecordsFile)
    }

    static addBirthRecords(birthRecord) {
        const birthRecords = this.getAllBirthRecords();

        birthRecords.push(birthRecord);
        writeFile(birthRecordsFile, birthRecords);
        return { message: "تم إضافة تسجيل الوالدات" };
    }

    static updateBirthRecord(id, updateData) {
        let birthRecords = this.getAllBirthRecords()
        const index = birthRecords.findIndex(birth => birth.id === id)
        if (index === -1) return null;


        birthRecords[index] = { ...birthRecords[index], ...updateData }

        writeFile(birthRecordsFile, birthRecords)
        return birthRecords[index]
    }

    static deletedBirthRecord(id) {
        let birthRecords = this.getAllBirthRecords();
        const newbirthRecord = birthRecords.filter(birth => birth.id !== id);

        if (birthRecords.length === newbirthRecord.length) {
            return false;
        }

        writeFile(birthRecordsFile, newbirthRecord);
        return true;
    }

}

module.exports = BirthRecords