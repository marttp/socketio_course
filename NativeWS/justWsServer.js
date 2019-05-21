const http = require("http");
const websocket = require("ws");

// Create server. Not use express
const server = http.createServer((req, res) => {
  res.end("I am connected!");
});

const wss = new websocket.Server({ server });
wss.on("headers", (headers, req) => {
  // Check header data for more information
  console.log(headers);
});

wss.on("connection", (ws, req) => {
  // When start connection. Send to the connecter
  ws.send("Welcome to the websocket server!!");

  // trigger when received event. Example is message
  ws.on("message", msg => {
    console.log(msg);
  });
});

server.listen(8000);
