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
function storeUserInfo(id, room, color) {

  const user = {id, room, color};
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

    socket.join(room);

    // check joined rooms user color, give newly joined ID the opposite color
    if (users.filter(user => {
      if (user.room === room) return user.color
    }) === 'white') {
      storeUserInfo(socketID, room, 'black')
    } else {
      storeUserInfo(socketID, room, 'white')
    }
    console.log(users);

    // send current users in room to all users
    io.to(room).emit("roomUsers", {
      users: users.filter(user => user.room === room),
    });

    // if there is only 1 room, return that room
    if (users.length === 1) return io.emit("available_rooms", [users[0].room]);

    // filters out duplicate room numbers
    let rooms = users.reduce((a, b) => {
      if (a.room !== b.room) return [a.room, b.room];
      else return [a.room];
    })

    // send all available rooms to all users
    io.emit("available_rooms", rooms);

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