const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}/`)
.then( d => console.log("database connected") )
.catch( e => console.log("database not connected") );

exports.mongoose = mongoose;