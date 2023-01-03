
export default function CheckerBoard({ playerColor } : { playerColor: string }) {

  const selectTile = (element) => {
    const selectedElement = element
    // check if selected tile is valid, (has a child piece)
    if(element.children.length === 0) return
    const selectedPiece = element.children[0]
    getValidMoves(selectedElement)
  }
  console.log(playerColor)
  const getValidMoves = (selectedElement) => {
    // +9  +7 or -9  -7 valid tiles
    // must check is a piece exists on these tiles
    // if piece is your piece move is invalid
    // if piece is opponents piece we also need to check if it can be jumped
    // +18  +14 or -18  -14 valid jump moves if no piece in on +18 or +14
    // use function recursion to check each step
    // one turn could be multiple moves, eg: taking many pieces
    const tiles = selectedElement.parentElement.children
    const elementIndex = Number(selectedElement.dataset.index)
    console.log(tiles)
    let validMoves = []
    // TODO: dont need to check - values as pieces can only move forward
    console.log(tiles[elementIndex + 9])
    console.log(tiles[elementIndex + 7])
    console.log(tiles[elementIndex - 9])
    console.log(tiles[elementIndex - 7])
    // check if each possible move has a opponent piece or your piece
    // if your piece, move is not valid
    // if opponent piece move might be valid
    // if empty,
   
  }

  // must check if selected tile has a piece
  // if it has a piece what are its valid moves
  // valid moves are diagonal 1 square, pieces can only go one direction
  // valid moves are also jumping a piece to take it
  // if a piece reaches the end of the board it can move both directions
  // once a player has no pieces left, they lose
  
  // after a player makes a valid move, send the move to the socket
  // socket then sends the move to the other player in the room
  // player piece count will be updated
  // when piece count = 0 the player looses
  // a variable will keep track of which players turn it currently is
  // it will change between player1, player2
  // users will be assigned player1 or player2 on joining a room


  return (
    <div className="board">
      <div className="tile white" data-index="0" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="1" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="2" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="3" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="4" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="5" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="6" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="7" onClick={(e)=>selectTile(e.target)}></div>

      <div className="tile black" data-index="8" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="9" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="10" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="11" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="12" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="13" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="14" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="15" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>

      <div className="tile white" data-index="16" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="17" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="18" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="19" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="20" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="21" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="22" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="black" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>  
      </span></div>
      <div className="tile black" data-index="23" onClick={(e)=>selectTile(e.target)}></div>

      <div className="tile black" data-index="24" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="25" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile black" data-index="26" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="27" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile black" data-index="28" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="29" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile black" data-index="30" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="31" onClick={(e)=>selectTile(e.target)}></div>

      <div className="tile white" data-index="32" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile black" data-index="33" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="34" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile black" data-index="35" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="36" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile black" data-index="37" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="38" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile black" data-index="39" onClick={(e)=>selectTile(e.target)}></div>

      <div className="tile black" data-index="40" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="41" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="42" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="43" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="44" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="45" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="46" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="47" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>

      <div className="tile white" data-index="48" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="49" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="50" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="51" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="52" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="53" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="54" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="55" onClick={(e)=>selectTile(e.target)}></div>

      <div className="tile black" data-index="56" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="57" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="58" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="59" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="60" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="61" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
      <div className="tile black" data-index="62" onClick={(e)=>selectTile(e.target)}></div>
      <div className="tile white" data-index="63" onClick={(e)=>selectTile(e.target)}><span className="piece">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" width="50px"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"/></svg>
      </span></div>
    </div>
  )
}