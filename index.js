const express = require("express");
const app = express();
const teamsData = require("./Json/fifa22teams.json");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Sono online!");
});

app.get("/teams", (req, res) => {
  res.send(teamsData.teams);
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
