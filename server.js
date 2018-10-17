const express = require('express');
var path = require("path");
const app = express();

app.use('/', express.static(path.join(__dirname + "/public")));

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
    console.log(`Find the server at: ${app.get("port")}/`); // eslint-disable-line no-console
});