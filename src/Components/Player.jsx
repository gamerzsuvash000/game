export default function Player ({name, symbol}) {
  return (
    <span className="player-info">
      <span id="player-name">{name}</span>
      <span id="player-symbol">{symbol}</span>
      <button>Edit</button>
    </span>
  )
}
