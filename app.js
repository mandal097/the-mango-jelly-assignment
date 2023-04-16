require('dotenv').config();
require('./src/config/dbConn');
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors');

const baseRouter = require('./src/routes/router')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/v1', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'), function (err) {
        if (err) {
            res.json({
                status: 400,
                message: 'something went wrong'
            })
        }
    })
})

app.use('/api/v1', baseRouter);

app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
})