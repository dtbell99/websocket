"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const url_1 = __importDefault(require("url"));
const uuid_1 = require("uuid");
const server = http_1.default.createServer();
const wsServer = new ws_1.WebSocketServer({ server });
const port = 3002;
const connections = {};
const users = {};
const broadcast = () => {
    Object.keys(connections).forEach((uuid) => {
        const connection = connections[uuid];
        const message = JSON.stringify(users);
        connection.send(message);
    });
};
const handleMessage = (message, uuid) => {
    console.log("Message Received");
    users[uuid].state = JSON.parse(message.toString());
    console.log(users[uuid]);
    broadcast();
};
const handleClose = (uuid) => {
    console.log(`${users[uuid].username} disconnected`);
    delete users[uuid];
    delete connections[uuid];
    broadcast();
};
wsServer.on("connection", (connection, request) => {
    if (!request || !request.url)
        return;
    const requestUrl = request.url.toString();
    const { username } = url_1.default.parse(requestUrl, true).query;
    if (typeof username !== "string")
        return;
    const uuid = (0, uuid_1.v4)();
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
