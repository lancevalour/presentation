const express = require('express');
const app = express();
var path    = require("path");

app.set("port", process.env.PORT || 8000);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(app.get("port"), () => {
    console.log(`Find the server at: ${app.get("port")}/`); // eslint-disable-line no-console
});