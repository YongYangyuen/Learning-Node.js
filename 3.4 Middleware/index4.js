import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(
    import.meta.url));
var bandName = "";

function bandNameLogger(req, res, next) {
    bandName = req.body.street + req.body.pet;
    const data = {
        bandName: bandName
    }

    console.log("===========================");
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);
    console.log("Request Body:", req.body);
    console.log("Response Body:", data);
    console.log("===========================");

    next();
}

app.use(express.urlencoded({ extended: true }));
app.use(bandNameLogger);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
    res.send(
        "<h1>Your band name is:</h1>" + "\n" +
        `<h2>${bandName}</h2>`
    );
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});