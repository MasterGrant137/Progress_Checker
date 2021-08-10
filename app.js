const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Response path: ${res.path}`);

    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use(express.static("public"));

// app.use(express.static("images"));
// app.use(express.static("scripts"));
// app.use(express.static("styles"));
// app.use("/static", express.static("public"));

// app.use("/static", express.static(__dirname, "public/styles"));
// app.use("/static", express.static(__dirname, "public/scripts"));
// app.use("/static", express.static(__dirname, "public/images"));

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));
