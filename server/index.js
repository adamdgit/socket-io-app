const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());

// setup cors to allow front-end to connect
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

const users = [];

// keep track of users inside of each room
function storeUserInfo(id, room) {

  const user = {id, room};
  // if user already exists in room, remove them from the array
  users.filter((user, index) => {
    if (user.id === id) users.splice(index, 1);
  });
  users.push(user);

};

// remove disconnected user from array
function removeDisconnectedUser(id) {

  users.filter((user, index) => {
    if (user.id === id) users.splice(index, 1);
  });

}

io.on("connection", (socket) => {

  console.log(`user has connected: ${socket.id}`);

  socket.on("join_room", ({ socketID, room }) => {
    console.log(users);
    socket.join(room);
    storeUserInfo(socketID, room);

    // send current users in room to all users
    io.to(room).emit("roomUsers", {
      room: room,
      users: users.filter(user => user.room === room)
    });
  });

  // listen for users disconnecting
  socket.on("disconnect", () => {
    console.log(socket.id);
    removeDisconnectedUser(socket.id);
  })

  // listen for message from clients, send back message to room
  socket.on("send_message", (data) => {
    console.log(data)
    io.to(data.room).emit("receive_message", data);
  });

});



server.listen(3001, () => {
  console.log("server running on 3001.");
});