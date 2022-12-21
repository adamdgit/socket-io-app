import { useEffect, useState } from "react";
import { io, Manager } from "socket.io-client"
// connect to backend socket on 3001
const manager = new Manager("http://localhost:3001");
const socket = manager.socket("/")

type socketMessage = {
  message: string
}

function App() {

  const [room, setRoom] = useState("");
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [received, setReceived] = useState<string[] | []>([]);
  const [socketID, setSocketID] = useState<string | undefined>(undefined);

  // creates and joins a room, name is set by 'room' state value
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room)
    }
  }

  // send a message to current room
  const sendMessage = () => {
    socket.emit("send_message", { message, room })
  }

  // update message array when receiving a message update from server 
  const messageHandler = (message: socketMessage) => {
    setReceived(received => [...received, message.message])
  }

  // listen for socket updates
  useEffect(() => {

    socket.on("connect", () => setSocketID(socket.id));
    socket.on("disconnect", () => console.log('disconnected'));
    socket.on("receive_message", messageHandler);

    return () => {
      socket.off("receive_message");
      socket.off("connect");
      socket.off("disconnect");
    }
    
  },[socket]);

  console.log(received)

  return (
    <div className="App">

      <span className="user-info">
        <p>Connect with id: {socketID}</p>
        <p>Room: {room}</p>
      </span>

      <h1>Socket Io app</h1>
      <input className='input-message' 
        onChange={(e) => setMessage(e.target.value)} 
        type="text" 
        placeholder='Message...' />
      <button className='send-button' onClick={() => sendMessage()}>Send Message</button>

      <input className='input-message' 
        onChange={(e) => setRoom(e.target.value)} 
        type="text" 
        placeholder='Create room...' />
      <button className='send-button' onClick={() => joinRoom()}>Join Room</button>

      <h2>Messages:</h2>
      <ul>{received.map((message, i) => (
        <li key={i}>{message}</li>
      ))}</ul>
    </div>
  )
}

export default App
