require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_NAME}/`)
.then( d => console.log("database connected") )
.catch( e => console.error("database not connected ", e) )

exports.mongoose = mongoose;