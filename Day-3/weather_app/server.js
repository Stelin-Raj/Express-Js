const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const apiKey = "0f7648e3bb45f233b1b09cb1a8ce4157";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", { weather: null, error: null });
});

app.post("/", app2, app1);

function app2(req, res, next) {
  let defaultToken = "0f7648e3bb45f233b1b09cb1a8ce4157";
  let token = req.body.token;
  if (defaultToken === token) {
    next();
  } else {
    res.render("index", {
      weather: null,
      error: "Please enter the API correctly!",
    });
  }
  // res.render("index", { weather: null, error: null });
}

function app1(req, res) {
  console.log(req.body.city);
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  request(url, function (err, response, body) {
    let weather = JSON.parse(body);
    if (weather.main == undefined) {
      res.render("index", {
        weather: null,
        error: "Error, please enter the place correctly",
      });
    } else {
      let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      res.render("index", { weather: weatherText, error: null });
    }
  });
}

app.listen(3000);
