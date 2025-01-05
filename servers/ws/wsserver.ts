import http from "http";
import { RawData, WebSocketServer } from "ws";
import url from "url";
import { v4 as uuidv4 } from "uuid";

const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 3002;

type UserState = {
  x: number;
  y: number;
};

type User = {
  username: string;
  state: UserState;
};

const connections: Record<string, any> = {};
const users: Record<string, User> = {};

const broadcast = () => {
  Object.keys(connections).forEach((uuid) => {
    const connection = connections[uuid];
    const message = JSON.stringify(users);
    connection.send(message);
  });
};

const handleMessage = (message: RawData, uuid: string) => {
  console.log("Message Received");
  users[uuid].state = JSON.parse(message.toString());
  console.log(users[uuid]);

  broadcast();
};

const handleClose = (uuid: string) => {
  console.log(`${users[uuid].username} disconnected`);
  delete users[uuid];
  delete connections[uuid];

  broadcast();
};

wsServer.on("connection", (connection, request) => {
  if (!request || !request.url) return;
  const requestUrl = request.url.toString();

  const { username } = url.parse(requestUrl, true).query;
  if (typeof username !== "string") return;

  const uuid = uuidv4();
  console.log(username + " connected. Assigning id " + uuid);
  connections[uuid] = connection;
  users[uuid] = {
    username: username || "Unknown",
    state: { x: 0, y: 0 },
  };

  connection.on("message", (message) => handleMessage(message, uuid));
  connection.on("close", () => handleClose(uuid));
});

server.listen(port, () => {
  console.log(`Websocket Server listening on port ${port}`);
});
