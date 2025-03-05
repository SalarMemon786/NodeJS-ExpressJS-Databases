require('dotenv').config();
const express = require('express');
const adminRoute = require('./routes/adminRoute');  // No need for destructuring
const teachersRoute = require('./routes/teachersRoute');
const staffRoute = require('./routes/staffRoute');
const managementRoute = require('./routes/managementRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(adminRoute);
app.use(teachersRoute);
app.use(staffRoute);
app.use(managementRoute);

app.listen(PORT, () => console.log(`The server is running on PORT ${PORT}`));