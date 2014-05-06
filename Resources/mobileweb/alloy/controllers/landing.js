function Controller() {
    function rbsClicked() {
        var xpng = require("xpng");
        xpng.openWin(Alloy.CFG.nav, "refillDetails");
    }
    function scanClicked() {
        Barcode.capture({
            animate: true,
            overlay: overlay,
            showCancel: true,
            showRectangle: true,
            keepOpen: true
        });
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
        top: 0,
        height: Titanium.UI.SIZE,
        width: "100%",
        heigth: "100%",
        id: "landing",
        layout: "vertical"
    });
    $.__views.landing && $.addTopLevelView($.__views.landing);
    $.__views.__alloyId2 = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
        width: "100%",
        layout: "horizontal",
        id: "__alloyId2"
    });
    $.__views.landing.add($.__views.__alloyId2);
    $.__views.rbs = Ti.UI.createButton({
        top: "0dp",
        width: Ti.UI.FILL,
        height: "50dp",
        color: "#ee6e1a",
        backgroundColor: "white",
        title: "Refill by Scan",
        id: "rbs"
    });
    $.__views.__alloyId2.add($.__views.rbs);
    rbsClicked ? $.__views.rbs.addEventListener("click", rbsClicked) : __defers["$.__views.rbs!click!rbsClicked"] = true;
    $.__views.scan = Ti.UI.createButton({
        top: "0dp",
        width: Ti.UI.FILL,
        height: "50dp",
        color: "#ee6e1a",
        backgroundColor: "white",
        title: "Scan",
        id: "scan"
    });
    $.__views.__alloyId2.add($.__views.scan);
    scanClicked ? $.__views.scan.addEventListener("click", scanClicked) : __defers["$.__views.scan!click!scanClicked"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var Barcode;
    var overlay;
    __defers["$.__views.rbs!click!rbsClicked"] && $.__views.rbs.addEventListener("click", rbsClicked);
    __defers["$.__views.scan!click!scanClicked"] && $.__views.scan.addEventListener("click", scanClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;