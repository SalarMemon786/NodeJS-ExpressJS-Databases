const express = require('express');
const app = express();
const adminRoute = express.Router();

app.use(adminRoute);

// adminRoute.get("/admin",(req, res) => {
//     res.status(200).json({
//         msg: "all ok admin"
//     });
// });

// adminRoute.get("/getproducts",(req, res) => {
//     res.status(200).json({
//         msg: "all ok getproducts"
//     });
// });

// adminRoute.get("/getcustomers",(req, res) => {
//     res.status(200).json({
//         msg: "all ok getcustomers"
//     });
// });

function adminRoutes(inp){
    adminRoute.get(`/${inp}`,(req, res) => {
        if(inp == "trackdelboys"){
            res.status(200).json({
                msg: `all ok delivery boys`
            });
        }
        else{
            res.status(200).json({
                msg: `all ok ${inp}`
            });
        }
    });
}

adminRoutes("admin");
adminRoutes("getproducts");
adminRoutes("getcustomers");
adminRoutes("getorders");
adminRoutes("trackdelboys");

module.exports = { adminRoute };