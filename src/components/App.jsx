import "../scss/App.scss"
import Header from "./Header"
import Board from "./Board"
import Dice from "./Dice"
import GameStatus from "./GameStatus"
import {useState} from "react";
import Mercancy from "./Mercancy"
import Reset from "./Reset"

function App() {

const [position, setPosition] = useState (0);
const [cookie, setCookie] = useState (["🍪","🍪","🍪"]);
const [egg, setEgg]  = useState (["🥚","🥚","🥚"]);
const [frog, setFrog]  = useState (["🐸","🐸","🐸"]);

const [result, setResult]  = useState ("")
const [gameStatus, setGameStatus]  = useState ("En curso")

const getRandomNumber =(max)=> {
return Math.ceil(Math.random() * max);

}

const rollDice =()=> {
   const randomNumber = getRandomNumber(4);
   console.log(randomNumber);
  if ( randomNumber === 4) {
 setPosition(position+1);
 setGameStatus("Grogu avanza");
 } else if ( randomNumber ===  1) {
 const newCookie = (cookie.slice(1))
  setCookie(newCookie);
  setGameStatus("Has recogido una galleta");
} else if ( randomNumber ===  2) {
  const newEgg = (egg.slice(1))
   setEgg(newEgg);
   setGameStatus("Has recogido un huevo");
}  else if (randomNumber ===  3) {
  const newFrog = (frog.slice(1))
   setFrog(newFrog);
   setGameStatus("Has recogido una rana");
}
}
  return ( 
  <div className="page">
    <Header/>
    <main className="page">
    <Board position = {position} /> 
   {/*<Grogu/>*/}
    <Dice rollDice={rollDice}/>
    <GameStatus status={gameStatus}/>

    <Mercancy/>
     <Reset/>
    </main>
  </div>
  )
}

export default App

