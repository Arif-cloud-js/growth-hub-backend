const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    paymentamount:String,
    paymentmethod: String,
    title: String,
    description: String,
    clientName: String,
    freelancerId: String,
    messages: [{ sender: String, content: String, timestamp: Date }],
    creationTime:Date, 
          proposals:[
            {username:String,
             amount:String,
             completionTime:String,
             detail:String,
             PSId:String}

]

});

const Project = mongoose.model('last', projectSchema);

module.exports = Project;