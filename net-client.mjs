import net from "net";

const connection = net.createConnection({
    port:3000, 
    host: "localhost"
});

setInterval(function() {
    connection.write("GallickGun\r\n");
}, 2000)

connection.addListener("data", function(data) {
    console.info(`Received data from server ${data.toString()}`);
})