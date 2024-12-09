const fs = require('fs');
const path = require('path')


exports.readFile = (path) =>{
   try {
    return JSON.parse(fs.readFileSync(path,'utf8'))
   } catch (error) {
    return []
   }
}


exports.writeFile = (file,data) =>{
   fs.writeFileSync(file,JSON.stringify(data,null,2))
}