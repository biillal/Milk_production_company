const path = require('path');
const { readFile, writeFile } = require('../utility/files');

const cowsFile = path.join(__dirname, '../data/cows.json')

class Cows {
  static getAllCows() {
    return readFile(cowsFile)
  }

  static addCows(newCows) {
    const cows = this.getAllCows();
    
    cows.push(newCows);
    writeFile(cowsFile, cows)
    return {message:"Created successcully"}
  }

  static updateCow(id, updateData) {
    let cows = this.getAllCows()
    const index = cows.findIndex(cow => cow.id === id)
    if (index === -1) return null;


    cows[index] = { ...cows[index], ...updateData }

    writeFile(cowsFile, cows)
    return cows[index]
  }

  static deletedCow(id) {
    let cows = this.getAllCows();

    const newCows = cows.filter(cow => cow.id !== id);

    if (cows.length === newCows.length) {
      return false;
    }

    writeFile(cowsFile, newCows);
    return true;
  }
}

module.exports = Cows