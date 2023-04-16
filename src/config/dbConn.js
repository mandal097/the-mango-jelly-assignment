const mongoose = require('mongoose');

const DB_NAME = process.env.DB_NAME || 'mandal097';
const DB_PASSWORD = process.env.DB_PASSWORD || 'mandal097';

const uri = `mongodb+srv://${DB_NAME}:${DB_PASSWORD}@cluster0.ivvaqwv.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    UseNewUrlParser: true,
}).then(() => {
    console.log('connection successfull....');
}).catch((error) => {
    console.log(`connection failed....`);
})