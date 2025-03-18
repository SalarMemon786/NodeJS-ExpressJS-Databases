const { validationResult } = require('express-validator');
const { Student } = require('../../models/Student');

const adminController = (req, res) => {

    let error = validationResult(req);
    
    if(error.isEmpty()) {

        //insert data to the database
        const studentObj = new Student({ name: req.query.name, surname: req.query.surname });
        studentObj.save().then( (d) => {
            res.status(200).json({
                msg: "student inserted.",
                success: d
            });
        } ).catch( (e) => {
            res.status(400).json({
                msg: "student not inserted, something went wrong.",
                error: e
            });
        } );
        
    } else {

        res.status(400).json({
            msg: "validation error"
        });

    }  
};

exports.adminController = adminController;