import "../scss/App.scss"
import Header from "./Header"
import Board from "./Board"
{/*import Grogu from "./Grogu"*/}

function App() {

  const handleClick =(event)=> {
    
  }

  return ( 
  <div className="page">
    <Header/>
    <main className="page">
    <Board/> 
   {/*<Grogu/>*/}

      <section>
        <button className="dice" onClick={handleClick}>Lanzar Dado</button>
        <div className="game-status">En curso</div>
      </section>

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

