const express = require("express");
const port = 3000;
const cors = require("cors");
var cookieParser = require("cookie-parser");

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:8080",
    credentials: true
  })
);
app.use(cookieParser());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/getcookie", (req, res) => {
  console.log("POST method");
  console.log("headers ----------------");
  console.log(req.headers);
  console.log("cookies ----------------");
  console.log("req.cookies", req.cookies);
  res.cookie("postcookie", "cookieval", {
    expiries: new Date(Date.now() + 900000),
    path: "/",
    domain: "127.0.0.1"
  });
  res.sendStatus(200);
});

app.get("/getcookie", (req, res) => {
  console.log("COOKIES: ", req.cookies);
  console.log(req.headers);
  console.log("----------------");
  console.log(req.cookies);
  res.cookie("getcookie", "cooieval2", {
    expiries: new Date(Date.now() + 900000),
    path: "/",
    domain: "127.0.0.1"
  });
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
