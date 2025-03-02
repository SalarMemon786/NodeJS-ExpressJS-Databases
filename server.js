require('dotenv').config();

const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

const main = async () => {
    return await mongoose.connect("mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.ergsl.mongodb.net/");
};

main().then( (d) => {
    console.log("database connected.");

    const Friends = mongoose.model("Friends", { name: String });

    app.post("/api/friends", (req, res) => {
        const friendsObject = new Friends( req.body );
        friendsObject.save().then( (d) => {
            res.status(201).json({
                msg: "friend added.",
                friend: d
            });
        } ).catch( (e) => console.error("Error "+e) );
        
    });
    
} ).catch( (e) => {
    console.error("database connected. "+e);
} );



app.listen(PORT, () => console.log(`The server is running on PORT: ${PORT}`));