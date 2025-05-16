const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
projecttitle : {
        type:String,
        required:true
    },
  projectdescription : {
        type:String,
        required:true
    }
});
module.exports = mongoose.model('project',projectSchema);