const express = require('express');
const adminController = require('../../controllers/admin/adminController');
const adminRoute = express.Router();

adminRoute.get("/users", adminController);

exports.adminRoute = adminRoute;