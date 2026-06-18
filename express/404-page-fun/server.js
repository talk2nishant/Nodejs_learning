import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("pages/home.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve("pages/about.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.resolve("pages/404.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});