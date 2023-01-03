import { useState } from "react"

export default function Lobby({ socket, socketID, availableRooms } : 
  { socket:any, socketID:string | undefined, availableRooms:string[] }) {

    const [room, setRoom] = useState<string>('')
  // creates and joins a room, name is set by 'room' state value
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", ({ socketID, room }))
    }
  }

  console.log(availableRooms)

  return (
    <div className="rooms-wrap">

      <span className="heading1">Find & join rooms</span>

      <section className="create-room">
      <span className="heading2">Create a room</span>
        <div>
          <input className='input-message' 
            onChange={(e) => setRoom(e.target.value)}
            type="text" 
            placeholder='Create room...' />
          <button className='send-button' onClick={() => joinRoom()}>Create Room</button>
        </div>
      </section>
      
      <span className="heading2">Find a room</span>
      <section className="available-rooms">
      {
        availableRooms?.map((room, index) => (
          <span key={index} className="room">
            Room name: {room}
            <button className='send-button' onClick={() => joinRoom()}>Join {room}</button>
          </span>
        ))
      }

      </section>

    </div>
  )
}