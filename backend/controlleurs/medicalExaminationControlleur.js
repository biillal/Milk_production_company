const medicalExamination = require("../modules/medicalExamination")


exports.getAllmedicalExamination = (req,res)=>{
    const medicalExamination = medicalExamination.getAllmedicalExamination()
    return medicalExamination
}

