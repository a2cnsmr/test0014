const express = require("express");
const path = require("path");
const app = express();
const mime = {
    ".html": "text/html",
    ".css": "text/css",
}

app.use("/todo", express.static("todo"));   

app.get("/", (req, res) => {
	res.send("It's as small world!!");
});


app.get('/todo', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/todo/index.html'));
  });

app.listen(8014);