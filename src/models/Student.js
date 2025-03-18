const { mongoose } = require('../config/db');

const studentSchema = {
    name: String,
    surname: String
};

const Student = mongoose.model("student", studentSchema);

module.exports = { Student };