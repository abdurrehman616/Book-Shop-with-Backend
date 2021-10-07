var sendNotification = function (data) {
    var headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": "Basic NDE4YmEyYTQtOWQ1OC00MTBjLTgzNWUtZWM2Y2QzODU0YjUx"
    };

    var options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
    };

    var https = require('https');
    var req = https.request(options, function (res) {
        res.on('data', function (data) {
            console.log("Response:");
            console.log(JSON.parse(data));
        });
    });

    req.on('error', function (e) {
        console.log("ERROR:");
        console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
};

var message = {
    app_id: "bc013503-eee2-4020-98ab-fe3cc842cee4",
    contents: { "en": "Go and check there is the biggest sale on the books" },
    headings: { "en": "UPTO 30% OFF on ALL Books" },
    included_segments: ["Active Users"]
};

sendNotification(message);