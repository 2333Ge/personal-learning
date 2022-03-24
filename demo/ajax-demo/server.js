const app = require("express")();

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("hello");
});

app.listen(3002, () => {
  console.log("server listening");
});
