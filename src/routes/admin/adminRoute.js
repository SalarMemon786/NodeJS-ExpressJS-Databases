const express = require('express');
const { adminController } = require('../../controllers/admin/adminController');
const { studentValidator } = require('../../validators/studentValidator');
const adminRoute = express.Router();

adminRoute.get("/save_student", studentValidator , adminController);

module.exports = { adminRoute };