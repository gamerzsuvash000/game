import Player from "../Components/Player.jsx"
function App() {
  
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player />
          </li>
          <li>
             <span className="player-info">
                <span id="player-name">Player 2</span>
                <span id="player-symbol">o</span>
             </span>
             <button>Edit</button>
          </li>
        </ol>
      </div>
    </main>
  )
}

export default App
