import express from "express"

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/get", (req, res) => {
    res.json({message: "this ia a GET route example"});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});