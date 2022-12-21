import { useEffect, useState } from "react";
import { io, Manager } from "socket.io-client"
import Room from "./components/Room";
// connect to backend socket on 3001
const manager = new Manager("http://localhost:3001");
const socket = manager.socket("/")

type socketMessage = {
  message: string
}

function App() {

  const [received, setReceived] = useState<string[] | []>([]);
  const [socketID, setSocketID] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [room, setRoom] = useState<string>("n/a");

  // update message array when receiving a message update from server 
  const messageHandler = (message: socketMessage) => {
    setReceived(received => [...received, message.message])
  }

  // send a message to current room
  const sendMessage = () => {
    socket.emit("send_message", { message, room })
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
        <p>Connected with id: {socketID}</p>
        <p>Room: {room}</p>
      </span>

      <Room setRoom={setRoom} socket={socket}/>

      {

      }

      <input className='input-message' 
        onChange={(e) => setMessage(e.target.value)} 
        type="text" 
        placeholder='Message...' />
      <button className='send-button' onClick={() => sendMessage()}>Send Message</button>
      <h2>Messages:</h2>
      <ul>{received.map((message, i) => (
        <li key={i}>{message}</li>
      ))}</ul>

    </div>
  )
}

export default App
