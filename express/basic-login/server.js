import express from "express";
import home from "./pages/home.js";
// import login from "./pages/login.js";
import submit from "./pages/submit.js"; 
import path from "path";

const app = express();

app.get("/", (req, res) => {
  res.send(home());
});
// app.get("/login", (req, res) => {
//   res.send(login());
// });
app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./pages/login.html"));
  });
app.post("/submit", (req, res) => {
  res.send(submit());
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});