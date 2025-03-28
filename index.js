// CREATE A PROGRAM USING NODE.JS EVENTEMITTER THAT:
// LISTEN FOR MULTIPLE TYPES OF USER EVENTS( LOGIN, LOGOUT, PURCHASE, 
// AND PROFILE_UPDATE )
// TRACKS HOW MANY TIMES EACH EVENT IS EMITTED
// LOGS A SUMMARY OF ALL EVENTS

const fs = require('fs');
const EventEmitter = require("events");
const userEmitter = new EventEmitter();
const log_file = "log_file.json";

let saveCount = () => {
    fs.writeFileSync(log_file, JSON.stringify(summaryObj, null, 2));
}

let summaryObj = {
    "LOGIN": 0,
    "LOGOUT": 0,
    "PURCHASE": 0,
    "PROFILE_UPDATE": 0
}

if(!fs.existsSync(log_file)){
    saveCount();
} else {
    let data = fs.readFileSync(log_file, "utf-8");
    Object.assign(summaryObj, JSON.parse(data));
}

// LOGIN EVENT
userEmitter.on("LOGIN", (username) => {
    summaryObj.LOGIN++;
    saveCount();
    console.log(`${username} Logged in Successfully.`);
});

// LOGOUT EVENT
userEmitter.on("LOGOUT", (username) => {
    summaryObj.LOGOUT++;
    saveCount();
    console.log(`${username} Logged out Successfully.`);
});

// PURCHASE EVENT
userEmitter.on("PURCHASE", (username, item) => {
    summaryObj.PURCHASE++;
    saveCount();
    console.log(`${username} purchased ${item}`);
});

// PROFILE_UPDATE EVENT
userEmitter.on("PROFILE_UPDATE", (username, fields) => {
    summaryObj.PROFILE_UPDATE++;
    saveCount();
    console.log(`${username} updated these fields: ${fields}`)
});

// SUMMARY EVENT
userEmitter.on("SUMMARY", () => {
    console.log("________SUMMARY________")
    console.log(JSON.stringify(summaryObj));
})

// ALL EVENTS TRIGGERS HERE
userEmitter.emit("LOGIN", "SalarMemon");
userEmitter.emit("LOGOUT", "SalarMemon");
userEmitter.emit("PURCHASE", "SalarMemon", "Iphone 18");
userEmitter.emit("PROFILE_UPDATE", "Salar_Memon", "email, address");

// SUMMARY EVENT TRIGGER HERE
userEmitter.emit("SUMMARY");