//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  const day = date.getDate();
  res.render("list", { listTitle: day,
                       newItems: items });
});

app.post("/", function(req, res) {
  const nextItem = req.body.nextItem;
  console.log(req.body);

  if (req.body.add === "Work") {
    workItems.push(nextItem);
    res.redirect("/work")
  } else {
    items.push(nextItem);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {  listTitle: "Work List",
                        newItems: workItems});
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000.");
});
