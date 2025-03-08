const User = require('../../models/admin/Users');

const adminController = (req, res) => {
    const newAdminUser = new User({ name: req.query.name });
    newAdminUser.save()
    .then( (d) => {
        res.status(200).json({
            "msg": "user added to the database.",
            data: d
        });
    } )
    .catch( (e) => {
        res.status(400).json({
            msg: "user is not added to the database",
            data: e
        });
    } );


    
};

module.exports = adminController;