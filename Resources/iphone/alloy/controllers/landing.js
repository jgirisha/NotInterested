function Controller() {
    function rbsClicked() {
        console.log("RBS Clicked");
        var xpng = require("xpng");
        xpng.openWin(Alloy.CFG.nav, "refillDetails");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "landing";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.landing = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "vertical",
        id: "landing"
    });
    $.__views.landing && $.addTopLevelView($.__views.landing);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "__alloyId2"
    });
    $.__views.landing.add($.__views.__alloyId2);
    $.__views.rbs = Ti.UI.createButton({
        width: Ti.UI.FILL,
        height: "50dp",
        color: "#ee6e1a",
        backgroundColor: "white",
        title: "Refill by Scan",
        id: "rbs"
    });
    $.__views.__alloyId2.add($.__views.rbs);
    rbsClicked ? $.__views.rbs.addEventListener("click", rbsClicked) : __defers["$.__views.rbs!click!rbsClicked"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.rbs!click!rbsClicked"] && $.__views.rbs.addEventListener("click", rbsClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;