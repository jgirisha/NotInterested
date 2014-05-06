exports.openWin = function(navGroup, winName, payload) {
    if ("undefined" == typeof Alloy) {
        var w = winName;
        if (payload) {
            var payloadKeys = Object.keys(payload);
            payloadKeys.forEach(function(item, index) {
                w[payloadKeys[index]] = payload[item];
            });
        }
<<<<<<< HEAD
    } else var w = Alloy.createController(winName, payload || {}).getView();
    navGroup.openWindow(w, {
=======
    } else var w = Alloy.createController(winName).getView();
    navGroup.open(w, {
>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
        animated: true
    });
};