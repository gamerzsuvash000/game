export default function Player ({name, symbol}) {
  return(
      <li>
          <span className="player-info">
              <span id="player-name">{name}</span>
              <span id="player-symbol">{symbol}</span>
           </span>
           <button>Edit</button>
      </li>
  )
}
