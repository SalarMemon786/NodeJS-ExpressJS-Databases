const { check } = require('express-validator');

let studentValidator = [
    check('name', 'firstname is required.').notEmpty(),
    check('surname', 'surname is required.').notEmpty()
]

module.exports = { studentValidator }