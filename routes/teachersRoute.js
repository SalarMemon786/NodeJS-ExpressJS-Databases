const { codeEfficient, mainRoute } = require('./mainRoute');
const name = "teacher";

codeEfficient(name, {
    username: name,
    password: `${name}24525fsgs@$*(`,
    msg: `Hello ${name}`,
    subjects: ["JS Programming", "Frontend Development", "Backend Development",
            "Full Stack Development", "DevOps Engineer", "Data Scientist"]
})

module.exports = mainRoute;