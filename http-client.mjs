import https from "https";

const endpoint = "https://enxof20srxfrk.x.pipedream.net";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",

    }
}, function (response) {
    response.addListener("data", function (data) {
        console.info(`Receive: ${data.toString()}`)
    })
});

const body = JSON.stringify({
    firstName: "Gallick",
    lastName: "Gun"
});

request.write(body)
request.end();