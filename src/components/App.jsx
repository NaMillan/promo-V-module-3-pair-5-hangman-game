import "../scss/App.scss"
import Header from "./Header"
import Board from "./Board"
import Dice from "./Dice"
import GameStatus from "./GameStatus"
import {useState} from "react";

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
 let newStatus = ""; 
 if ( randomNumber === 4) {
 setPosition(position+1);
 setGameStatus(newStatus="Grogu avanza");
 } else if ( randomNumber ===  1) {
 const newCookie = (cookie.slice(1))
  setCookie(newCookie);
} else if ( randomNumber ===  2) {
  const newEgg = (egg.slice(1))
   setEgg(newEgg);
}  else if (randomNumber ===  3) {
  const newFrog = (frog.slice(1))
   setFrog(newFrog);
}
}
  return ( 
  <div className="page">
    <Header/>
    <main className="page">
    <Board/> 
   {/*<Grogu/>*/}
    <Dice diceManagment={rollDice}/>
    <GameStatus status={gameStatus}/>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
  </div>
  )
}

export default App

