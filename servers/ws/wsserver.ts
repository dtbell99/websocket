import http from "http";
import { WebSocketServer } from "ws";
import url from "url";
import { v4 as uuidv4 } from "uuid";

const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 3002;

const connections = {};
const users = {};

wsServer.on("connection", (connection, request) => {
  const { username } = url.parse(request.url, true).query;
  const uuid = uuidv4();
  console.log(username + " connected. Assigning id " + uuid);
});

server.listen(port, () => {
  console.log(`Websocket Server listening on port ${port}`);
});
