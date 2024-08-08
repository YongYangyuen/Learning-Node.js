import express from "express";

const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.status(201).send(`<h1>Register successfullly.</h1><p>Your name is "${name}".<br>Your email is "${email}".</p>`);
});

app.put("/user/edit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.status(200).send(`<h1>Edit successfully.</h1><p>Your new name is "${name}".<br>Your new email is "${email}".</p>`);
});

app.patch("/user/update", (req, res) => {
    const name = req.body.name;

    res.status(200).send(`<h1>Update successfully.</h1><p>Your new name is "${name}".</p>`);
});

app.delete("/user/delete", (req, res) => {
    // Deleting

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});