const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const asyncHandler = require('express-async-handler');
const personel = require('./personel');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('API activated!');
});

app.get('/api/personels', asyncHandler(async(req, res) => {
    const data = personel.getAll();
    res.json(data)
}));

app.post('/api/personels', asyncHandler(async(req, res) => {
    personel.saveFile(req.body);
    res.send('personel saved');
}));


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));