const express = require('express');
const { adminRoute } = require('./routes/admin/adminRoute');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

app.use("/admin", adminRoute);

// start the server
app.listen(PORT, () => console.log(`the server is running on PORT: ${PORT}`));