function Controller() {
    function rbsClicked() {
        var xpng = require("xpng");
        xpng.openWin(Alloy.CFG.nav, "refillDetails");
    }
    function scanClicked() {
        loadNextPage();
    }
    function loadNextPage() {
        var xpng = require("xpng");
        xpng.openWin(Alloy.CFG.nav, "contactInfo");
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
        layout: "vertical",
        id: "landing"
    });
    $.__views.landing && $.addTopLevelView($.__views.landing);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var Barcode = require("ti.barcode");
    Barcode.allowRotation = true;
    Barcode.displayedMessage = "";
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
    var lblInsructionTop = Ti.UI.createLabel({
        text: "Show us the prescription you want to refill.",
        textAlign: "center",
        color: "#fff",
        backgroundColor: "transparent",
        font: {
            fontWeight: "bold",
            fontSize: 16
        },
        borderColor: "transparent",
        opacity: 1,
        width: 400,
        height: 30,
        top: 10
    });
    overlay.add(lblInsructionTop);
    var lblInsructionBottom = Ti.UI.createLabel({
        text: "Center the bar code within the rectangle. Hold the phone still from 6-8 inches away until it's scanned.",
        textAlign: "center",
        color: "#fff",
        backgroundColor: "transparent",
        font: {
            fontSize: 14
        },
        borderColor: "transparent",
        opacity: 1,
        width: 450,
        height: 40,
        bottom: 0
    });
    overlay.add(lblInsructionBottom);
    Barcode.addEventListener("success", function(e) {
        Barcode.cancel();
        alert("Success called with barcode: " + e.result);
        loadNextPage();
    });
    Barcode.addEventListener("error", function() {
        Barcode.cancel();
        alert("No valid barcode found. Please scan again.");
    });
    __defers["$.__views.rbs!click!rbsClicked"] && $.__views.rbs.addEventListener("click", rbsClicked);
    __defers["$.__views.scan!click!scanClicked"] && $.__views.scan.addEventListener("click", scanClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;