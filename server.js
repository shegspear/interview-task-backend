const express = require('express');
const personel = require('./dummyData/personel');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const asyncHandler = require('express-async-handler');
const Personel = require('./models/personelModel');

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API activated!');
});

app.get('/api/personels', asyncHandler(async(req, res) => {
    const personel = await Personel.find({});
    console.log(personel)
    if(personel) {
        res.json(personel);
    } else {
        res.send('no results')
    }
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));