import "../scss/layout/board.scss"
import Grogu from "./Grogu"


function Board ({position}){
    return ( 
        <section className="board">
        <div className="cell"><Grogu/>{position}</div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>
    )
    }
    export default Board;