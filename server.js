require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//promise chain
const main = async () => {
    return await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ergsl.mongodb.net/`);
};

main().then((data) => console.log("Database Connected."))
.catch( err => console.error(err) );


app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}`));
