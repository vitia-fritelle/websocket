const WebSocket = require("ws");

const WebSocketServer = new WebSocket.Server({
    port: 3000,
});

WebSocketServer.on("connection", (socket) => {

    socket.on("message", (msg) => {
        const message = msg.toString('utf8');
        console.log("Received:", message);
        if (message === "Hello") {
            socket.send("World!");
        }
    });
});
