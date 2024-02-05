import "../scss/layout/dice.scss"
import GameStatus from "./GameStatus"

function Dice({rollDice}) {


  return (
    <section>
    <button className="dice" onClick={rollDice}>Lanzar Dado</button>
    <GameStatus/>
    </section>
  )
}

export default Dice