require('dotenv').config();
const express = require('express');
const { adminRoute } = require('./routes/admin/adminRoute.js');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(adminRoute);

app.listen(PORT, () => console.log(`the server is running on PORT ${PORT}`));