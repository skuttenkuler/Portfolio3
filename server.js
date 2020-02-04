//install packages
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


//email

//set PORT
const PORT = process.env.PORT || 3000;

const app = express();
//body-parser
app.use(bodyParser.urlencoded({extended: true}))
//load static
app.use(express.static("public"));

//use routes
require('./routes/html-routes')(app)

app.listen(PORT, () => {
    console.log(`App running on Port: ${PORT}.`)
})