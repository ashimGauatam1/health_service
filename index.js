const express = require('express');
const bodyParser = require('body-parser');
const serviceRoutes = require('./Route/service.route.js');
const connectToDb = require('./db/dbConnect.js');
require('dotenv').config(); 
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

const startServer = async () => {
    await connectToDb();

    app.use('/api', serviceRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

startServer();
