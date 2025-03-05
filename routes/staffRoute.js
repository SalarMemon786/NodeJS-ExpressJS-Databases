const { codeEfficient, mainRoute } = require('./mainRoute');
const name = "staff";

codeEfficient(name, {
    username: name,
    password: `${name}032193s231@#!`,
    msg: `Hello ${name}...`
});

module.exports = mainRoute;