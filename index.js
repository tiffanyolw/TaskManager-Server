const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./configurations/config");
const Task = require("./models/task");

app.use(cors());
app.use(express.json());

const port = 3000;

config.authenticate().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

config.sync({force:false}).then((result) => {
    console.log("Sync successful");
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    Task.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.post("/", (req, res) => {
    Task.create(req.body).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});