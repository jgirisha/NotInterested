function Controller() {
<<<<<<< HEAD
=======
    function switchClient() {
        if ("mscripts" === Alloy.Globals.clientName) {
            Alloy.Globals.clientName = "meijer";
            Alloy.Globals.clientColor = "#0062A5";
        } else {
            Alloy.Globals.clientName = "mscripts";
            Alloy.Globals.clientColor = "#ee6e1a";
        }
        $.logoImage.image = "/images/" + Alloy.Globals.clientName + "/image_HeaderLogo.png";
        $.rbs.color = Alloy.Globals.clientColor;
        $.rbs.borderColor = Alloy.Globals.clientColor;
        $.switchClient.color = Alloy.Globals.clientColor;
        $.footerLabel.backgroundColor = Alloy.Globals.clientColor;
    }
>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
    function rbsClicked() {
        var xpng = require("xpng");
        xpng.openWin(Alloy.CFG.nav, "refillDetails");
    }
    function scanClicked() {
<<<<<<< HEAD
        loadNextPage();
    }
    function loadNextPage() {
        var xpng = require("xpng");
        xpng.openWin(Alloy.CFG.nav, "contactInfo");
=======
        Barcode.capture({
            animate: true,
            overlay: overlay,
            showCancel: true,
            showRectangle: true,
            keepOpen: true
        });
>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
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
<<<<<<< HEAD
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
=======
        top: 0,
        height: Titanium.UI.FILL,
        width: Ti.UI.FILL,
        heigth: Ti.UI.FILL,
        id: "landing"
    });
    $.__views.landing && $.addTopLevelView($.__views.landing);
    $.__views.logoImage = Ti.UI.createImageView({
        top: "25dp",
        width: "141dp",
        height: "40dp",
        bottom: "5dp",
        backgroundColor: "white",
        center: {
            x: "50%",
            y: "100dp"
        },
        id: "logoImage"
    });
    $.__views.landing.add($.__views.logoImage);
    $.__views.rbs = Ti.UI.createButton({
        center: {
            x: "30%",
            y: "50%"
        },
        width: "100dp",
        height: "100dp",
        color: Alloy.Globals.clientColor,
        backgroundColor: "white",
        borderColor: Alloy.Globals.clientColor,
        borderWidth: 2,
        title: "Refill by Scan",
        id: "rbs"
    });
    $.__views.landing.add($.__views.rbs);
    rbsClicked ? $.__views.rbs.addEventListener("click", rbsClicked) : __defers["$.__views.rbs!click!rbsClicked"] = true;
    $.__views.switchClient = Ti.UI.createButton({
        bottom: "50dp",
        width: Ti.UI.FILL,
        height: "30dp",
        color: Alloy.Globals.clientColor,
        backgroundColor: "white",
        title: "Switch client",
        id: "switchClient"
    });
    $.__views.landing.add($.__views.switchClient);
    switchClient ? $.__views.switchClient.addEventListener("click", switchClient) : __defers["$.__views.switchClient!click!switchClient"] = true;
    $.__views.footerLabel = Ti.UI.createLabel({
        color: "white",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        bottom: 0,
        height: "20dp",
        backgroundColor: Alloy.Globals.clientColor,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
        text: "2014, mscripts LLC",
        id: "footerLabel"
    });
    $.__views.landing.add($.__views.footerLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.logoImage.image = "/images/" + Alloy.Globals.clientName + "/image_HeaderLogo.png";
    var Barcode;
    var overlay;
    __defers["$.__views.rbs!click!rbsClicked"] && $.__views.rbs.addEventListener("click", rbsClicked);
    __defers["$.__views.scan!click!scanClicked"] && $.__views.scan.addEventListener("click", scanClicked);
    __defers["$.__views.switchClient!click!switchClient"] && $.__views.switchClient.addEventListener("click", switchClient);
>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;