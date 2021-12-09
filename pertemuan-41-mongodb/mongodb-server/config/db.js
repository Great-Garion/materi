const mongoose = require("mongoose")

const URL_DB = 'mongodb+srv://auzan:auzan@mycluster.mkryk.gcp.mongodb.net/skilvul?retryWrites=true&w=majority'

mongoose.connect(URL_DB);

module.exports = mongoose