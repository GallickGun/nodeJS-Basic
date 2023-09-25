import http from "http";

const server = http.createServer((request, response) => {

    if (request.url === "/gallickgun"){
        response.write("Hello, Saiyan God!")
    }else{
        response.write("Hello!")
    }
    
    response.end();
});

server.listen(3000);