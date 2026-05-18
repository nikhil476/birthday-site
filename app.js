import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/birthday", (req, res) => {
    res.render("birthday");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});