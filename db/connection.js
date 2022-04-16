const mongoose = require("mongoose");

const connectionString =
    "mongodb+srv://jacleneMongo:jaclene@cluster0.eho91.mongodb.net/gystApp?retryWrites=true&w=majority";

mongoose.connect(connectionString)
 

module.exports = mongoose;
