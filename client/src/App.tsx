import { useEffect, useState } from "react";
import { io, Manager } from "socket.io-client"
import CheckerBoard from "./components/CheckerBoard";
import Lobby from "./components/Lobby";
import Room from "./components/Room";

// connect to backend socket on 3001
const manager = new Manager("http://localhost:3001");
const socket = manager.socket("/")

type socketMessage = {
  message: string
}

function App() {

  const [received, setReceived] = useState<string[] | []>([]);
  const [availableRooms, setAvailableRooms] = useState<string[] | []>([]);
  const [socketID, setSocketID] = useState<string | undefined>(undefined);
  const [joinedRoom, setJoinedRoom] = useState<string>("");
  const [playerColor, setPlayerColor] = useState<string>("");

  // update message array when receiving a message update from server 
  const messageHandler = (message: socketMessage) => {
    setReceived(received => [...received, message.message])
  }

  const getAvailableRooms = (rooms: string[]) => {
    setAvailableRooms(rooms)
  }

  // listen for socket updates
  useEffect(() => {

    socket.on("connect", () => setSocketID(socket.id));
    socket.on("disconnect", () => console.log('disconnected'));
    socket.on("receive_message", messageHandler);
    socket.on("roomUsers", (data) => {
      console.log(data)
      setPlayerColor(data.color)
      setJoinedRoom(data.room)
    });
    socket.on("available_rooms", getAvailableRooms);

    return () => {
      socket.off("receive_message");
      socket.off("connect");
      socket.off("disconnect");
    }
    
  },[socket]);

  return (
    <div className="App">

      <span className="user-info">
        <p>Connected with id: {socketID}</p>
        <p>Room: {joinedRoom}</p>
      </span>

      <Lobby 
        socket={socket} 
        socketID={socketID} 
        availableRooms={availableRooms}
      />

      <Room 
        room={joinedRoom} 
        socket={socket} 
        received={received} 
      />

      <CheckerBoard 
        playerColor={playerColor}
      />

    </div>
  )
}

export default App
