const express = require("express");
const cors = require("cors");
const fs = require("fs");
const csv = require("csv-parser");
var multiparty = require("multiparty");

const app = express();
app.use(cors());

var Cron = require("../service/cron");
var results = [];

app.post("/info", (req, res) => {
  res.json({
    message: Cron.getCronInfo(req.body.cron),
  });
});

app.post("/upload", (req, res) => {
  results = [];
  var form = new multiparty.Form();
  form.parse(req, function (err, fields, files) {
    console.log(files)
    fs.createReadStream(files.file[0].path)
      .pipe(csv({}))
      .on("data", (data) => results.push(data))
      .on("end", () => {});
    res.json({
      message: "Success",
    });
  });
});

app.get("/getAllCronRecords", (req, res) => {
  res.json({
    message: results,
  });
});

app.get("/triggerTimes", (req, res) => {
  res.json({
    message: Cron.getTriggerTimes(results),
  });
});

module.exports = app;
