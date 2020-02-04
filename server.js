//install packages
const express = require('express');

//set PORT
const PORT = process.env.PORT || 3000;

const app = express();
//load static
app.use(express.static("public"));

//use routes
require('./routes/html-routes')(app)

app.listen(PORT, () => {
    console.log(`App running on Port: ${PORT}.`)
})