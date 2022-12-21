const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
// setup cors to allow front-end to connect
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

io.on("connection", (socket) => {
  console.log(`user has connected: ${socket.id}`);

  // listen for message from clients, send back message to room
  socket.on("send_message", (data) => {
    console.log(data)
    io.to(data.room).emit("receive_message", data);
  });

  socket.on("join_room", (data) => {
    socket.join(data);
  });

});

server.listen(3001, () => {
  console.log("server running on 3001.");
});