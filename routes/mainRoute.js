const express = require('express');
const mainRoute = express.Router();

function codeEfficient(route, jsonObj) {
    return mainRoute.get(`/${route}`, (req, res) => {
        res.status(200).json(jsonObj);
    });
}

// Export both the function and the router
module.exports = { codeEfficient, mainRoute };