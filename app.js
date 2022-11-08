const express = require("express");
const path = require("path");
const hbs = require("hbs");
const portNumber = process.env.PORT || 5000;
const app = express();
const file_path = path.join(__dirname, "./");
const partial_path = path.join(__dirname, "./templates/partials");
console.log(path.join(__dirname, "./templates/partials"));
app.set("view engine", "hbs");
app.use(express.static(file_path));
hbs.registerPartials(partial_path);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("*", (req, res) => {
  res.render("404error", {
    error_mssg: "404 Error Page Not Found!",
  });
});
app.listen(portNumber, () => {
  console.log(`Port is running ${portNumber}`);
});
