const {mongoose} = require('../../config/db');

const User = mongoose.model("User", { name: String });

module.exports = User;