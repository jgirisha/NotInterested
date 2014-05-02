function Controller() {
    function rbsClicked() {
        console.log("RBS Clicked");
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
    function loadNextPage() {
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
        width: "100%",
        top: 0,
        heigth: "100%",
        exitOnClose: true,
        layout: "vertical",
        id: "landing"
    });
    $.__views.landing && $.addTopLevelView($.__views.landing);
    $.__views.__alloyId2 = Ti.UI.createView({
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
    var Barcode = require("ti.barcode");
    Barcode.allowRotation = true;
    Barcode.displayedMessage = "Center the bar code within the rectangle. Hold the phone still from 6-8 inches away until it's scanned.";
    Barcode.allowMenu = false;
    Barcode.allowInstructions = true;
    Barcode.useLED = false;
    var overlay = Ti.UI.createView({
        backgroundColor: "transparent",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    });
    var lblInsruction = Ti.UI.createLabel({
        title: "Show us the prescription you want to refill.",
        textAlign: "center",
        color: "#fff",
        backgroundColor: "transparent",
        font: {
            fontWeight: "bold",
            fontSize: 16
        },
        borderColor: "#000",
        borderRadius: 10,
        borderWidth: 1,
        opacity: .5,
        width: 600,
        height: 30,
        top: 10
    });
    overlay.add(lblInsruction);
    Barcode.addEventListener("success", function(e) {
        Barcode.cancel();
        Ti.API.info("Success called with barcode: " + e.result);
        alert("Success called with barcode: " + e.result);
        loadNextPage();
    });
    __defers["$.__views.rbs!click!rbsClicked"] && $.__views.rbs.addEventListener("click", rbsClicked);
    __defers["$.__views.scan!click!scanClicked"] && $.__views.scan.addEventListener("click", scanClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;