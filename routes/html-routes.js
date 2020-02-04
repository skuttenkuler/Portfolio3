const path = require('path');

module.exports = (app) => {
    //index
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    });
    //main
    app.get("/portfolio", (req,res) => {
        res.sendFile(path.join(__dirname, '../public/main.html'));
    });
}