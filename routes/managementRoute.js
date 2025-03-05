const { codeEfficient, mainRoute } = require('./mainRoute');
const name = "management";

codeEfficient(name, {
    username: name,
    password: `${name}1342hsud@$%^`,
    msg: `Hello ${name.toUpperCase()}`
});

// Export `mainRoute` so it can be used in `server.js`
module.exports = mainRoute;