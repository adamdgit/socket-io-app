import { Dispatch, SetStateAction } from "react"

export default function Lobby({ room, setRoom, socket, socketID } : 
  { room:string, setRoom:Dispatch<SetStateAction<string>>, socket:any, socketID:string | undefined }) {

  // creates and joins a room, name is set by 'room' state value
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", ({ socketID, room }))
    }
  }

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

      <section className="available-rooms">
      <span className="heading2">Find a room</span>
        <span className="room">
          Room1
          <button className='send-button' onClick={() => joinRoom()}>Join Room</button>
        </span>
        <span className="room">
          Room2
          <button className='send-button' onClick={() => joinRoom()}>Join Room</button>
        </span>
        <span className="room">
          Room3
          <button className='send-button' onClick={() => joinRoom()}>Join Room</button>
        </span>
      </section>

    </div>
  )
}