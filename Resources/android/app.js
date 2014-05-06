var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var client_name = "meijer";

Alloy.Globals.clientName = client_name;

switch (client_name) {
  case "mscripts":
    Alloy.Globals.clientColor = "#ee6e1a";
    break;

  case "meijer":
    Alloy.Globals.clientColor = "#0062A5";
    break;

  default:
    Alloy.Globals.clientColor = "#ee6e1a";
}

Alloy.createController("index");