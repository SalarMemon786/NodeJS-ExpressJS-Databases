const { codeEfficient, mainRoute } = require('./mainRoute');

// Define admin routes using `codeEfficient`
codeEfficient("admin", {
    username: "admin",
    password: "admin032193s231@#!",
    msg: "Hello Admin..."
});

// Export `mainRoute` so it can be used in `server.js`
module.exports = mainRoute;