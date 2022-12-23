import { useState } from "react";

export default function Room({ room, socket, received } : 
  { room:string, socket:any, received:string[] }) {

  const [message, setMessage] = useState<string | undefined>(undefined);

  // send a message to current room
  const sendMessage = () => {
    socket.emit("send_message", { message, room })
  }

  return (
    <div className="rooms-wrap">

      <span className="heading1">Room: {room}</span>

      <span>
        <input className='input-message' 
          onChange={(e) => setMessage(e.target.value)} 
          type="text" 
          placeholder='Message...' />
        <button className='send-button' onClick={() => sendMessage()}>Send Message</button>
      </span>

      <h2>Messages:</h2>
      <ul>{received.map((message, i) => (
        <li key={i}>{message}</li>
      ))}</ul>

    </div>
  )
}