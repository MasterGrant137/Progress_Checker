const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Response path: ${res.path}`);

    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use(express.static("public"));

const port = process.env.PORT || 8085;
app.listen(port, () => console.log(`Listening intently on port ${port}...`));
