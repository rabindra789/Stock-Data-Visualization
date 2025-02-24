const express = require("express");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(cors())
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// The code is a simple route that reads the CSV file to send the data to the client.
app.get("/api/data", (req, res) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, "data", "dump.csv"))
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => {
            res.json(results);
        });
})

app.listen(port, () => console.log(`Server is running on ${port}`));
