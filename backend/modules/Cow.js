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

    static updateCow(Cow_number,updateData){
      let cows = this.getAllCows()
      const index = cows.findIndex(cow => cow.Cow_number === Cow_number)
      if(index === -1) return null;

      console.log(index);
      

      cows[index] = {...cows[index],...updateData}
      console.log("ad" +cows[index]);
      
      writeFile(cowsFile,cows)
      return cows[index]
    }

    static deletedCow(Cow_number){
      let cows = this.getAllCows()
      const index = cows.filter(cow => cow.Cow_number === Cow_number)
      if(index === -1) return null
      return cows[index]
    }
}

module.exports = Cows