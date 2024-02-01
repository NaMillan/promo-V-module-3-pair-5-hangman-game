import "../scss/layout/dice.scss"
import GameStatus from "./GameStatus"

function Dice() {
  const handleClick = ()=> {
    diceManagment() 
  }

  return (
    <section>
    <button className="dice" onClick={handleClick}>Lanzar Dado</button>
    <GameStatus/>
    </section>
  )
}

export default Dice