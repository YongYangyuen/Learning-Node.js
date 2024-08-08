// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>Hi, my name is \"Yong Yangyuen\".<br>Nice to meet you.</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Tel: 086-8093068</p>");
});

app.get("/req", (req, res) => {
    console.log(req.rawHeaders);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});