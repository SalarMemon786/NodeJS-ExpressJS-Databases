import express from 'express';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

//to read the data from the postman
app.use(express.json());

//home route
app.get("/", (req, res) => {
    res.status(201).json({
        msg: "all ok"
    });
});


//post route
app.post("/students", body('email').isEmail(), (req, res) => {
    //finds the validation errors in this request and wraps them in an 
    //object with handy functions.
    const errors = validationResult(req);
    if(errors.isEmpty()){
        console.log(req.body);
        res.status(201).json({
            msg: "student added successfully",
            data: req.body
        });
    } else {
        console.error(errors.msg);
        res.status(400).json({
            "err": errors.array()
        });
    }
});

app.listen(PORT, () => console.log(`The server is listening on PORT ${PORT}`));