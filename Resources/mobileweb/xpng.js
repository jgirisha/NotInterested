exports.openWin = function(navGroup, winName, payload) {
    if ("undefined" == typeof Alloy) {
        var w = winName;
        if (payload) {
            var payloadKeys = Object.keys(payload);
            payloadKeys.forEach(function(item, index) {
                w[payloadKeys[index]] = payload[item];
            });
        }
    } else var w = Alloy.createController(winName).getView();
    navGroup.open(w, {
        animated: true
    });
};