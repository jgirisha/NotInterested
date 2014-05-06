var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

<<<<<<< HEAD
=======
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

>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
Alloy.createController("index");