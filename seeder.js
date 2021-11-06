const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

const personel = require('./dummyData/personel');

const Personel = require('./models/personelModel');

dotenv.config();

connectDB();

const importData = async () => {
    try{
        await Personel.deleteMany();

        await Personel.insertMany(personel);

        console.log('Data imported'.green.inverse);
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1)
    }
};

if(process.argv[2] === '-p') {
    importData();
}