import Board from "./Board"

function Mercancy({cookie, egg, frog}) {
const mapeoData = () => {
  return (
    <>
      {cookie.map((cookies, i) => <section key={i}><Board position={cookies} /></section>)}
      {egg.map((eggs, i) => <section key={i}><Board position={eggs} /></section>)}
      {frog.map((frogs, i) => <section key={i}><Board position={frogs} /></section>)}
    </>
  );
}
  return (
    <>
    <div className="goods-item"> {mapeoData()}</div>
        {/*<section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>*/}
     </>
     );
}

export default Mercancy;
