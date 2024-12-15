const path = require('path');
const { readFile, writeFile } = require('../utility/files');

const milkProductionFile = path.join(__dirname, '../data/milkProduction.json');

class MilkProduction {
  static getAllMilkProductions() {
    return readFile(milkProductionFile);
  }

  static addMilkProduction(newEntry) {
    const productions = this.getAllMilkProductions();
    productions.push(newEntry);
    writeFile(milkProductionFile, productions);
    return { message: 'تمت إضافة إنتاج الحليب بنجاح' };
  }

  static updateMilkProduction(id, updateData) {
    let productions = this.getAllMilkProductions();
    const index = productions.findIndex((entry) => entry.id === id);

    if (index === -1) return null;

    productions[index] = { ...productions[index], ...updateData };
    writeFile(milkProductionFile, productions);
    return productions[index];
  }

  static deleteMilkProduction(id) {
    let productions = this.getAllMilkProductions();
    const newProductions = productions.filter((entry) => entry.id !== id);

    if (productions.length === newProductions.length) {
      return false;
    }

    writeFile(milkProductionFile, newProductions);
    return true;
  }
}

module.exports = MilkProduction;
