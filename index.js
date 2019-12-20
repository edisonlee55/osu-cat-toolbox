/**
 * Copyright (c) edisonlee55
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

let app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/redirect", function(req, res) {
  let state = req.query["state"];
  if (state == "auth") {
    if (req.query["error" == "access_denied"]) {
      console.error("Access denied. User deny the request.");
      res.sendStatus(403);
    } else {
      let userAuthCode = req.query["code"];
    }
  } else {
    console.error("Invalid request. State incorrect.");
    res.sendStatus(403);
  }
});

app.get("/", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>osu!cat Toolbox</h1>");
  res.end();
});

//TODO: API Function
function callAPI(data) {
  request(
    {
      uri: "<API RL here>",
      qs: {
        something: process.env.SOMETHING
      },
      method: "POST",
      json: data
    },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {

      } else {
        console.error("Error");
        console.error(response);
        console.error(error);
      }
    }
  );
}
//---

var server = app.listen(process.env.PORT || 3000, function() {
  console.log("osu!cat Toolbox");
  console.log("Copyright (c) edisonlee55. Licensed under MIT License.\n");
  //console.log("This software and website is not associated with ...");
  console.log("Listening on port %s", server.address().port);
});
