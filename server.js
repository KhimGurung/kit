const http = require("http");

const port = process.env.PORT || 3000;

const kit = require("./kit");

const server = http.createServer(kit);

server.listen(port);