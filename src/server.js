require('dotenv').config();
const express = require('express');
const { adminRoute } = require('./routes/admin/adminRoute');
const app = express();
const PORT = process.env.PORT;

app.use("/admin", adminRoute);

app.listen(PORT, () => console.log(`the servers is running on port: ${PORT}`));