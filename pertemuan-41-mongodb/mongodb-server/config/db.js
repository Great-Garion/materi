const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://auzan:auzan@mycluster.mkryk.gcp.mongodb.net/skilvul?retryWrites=true&w=majority');

module.exports = mongoose