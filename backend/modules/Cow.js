const path = require('path');
const { readFile, writeFile } = require('../utility/files');

const cowsFile = path.join(__dirname,'../data/cows.json')

class Cows {
    static getAllCows(){
        return readFile(cowsFile)
    }

    static addCows(newCows){
      const cows = this.getAllCows();
      cows.push(newCows);
      writeFile(cowsFile,cows)
      return cows
    }
}

module.exports = Cows