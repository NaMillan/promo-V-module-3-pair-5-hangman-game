import "../scss/layout/dice.scss"
import GameStatus from "./GameStatus"

function Dice() {



    const handleClick =(event)=> {
    
    }

  return (
    <section>
    <button className="dice" onClick={handleClick}>Lanzar Dado</button>
    <GameStatus/>
    </section>
  )
}

export default Dice