function Mercancy({ cookie, egg, frog }) {

  const mapeoData =()=> {
    return (
      <>
        {cookie.map((cookie, i) => {
          return <section key={i}>{cookie}</section>;
        })}
        {egg.map((egg, i) => {
          return <section key={i}>{egg}</section>
        })}
        {frog.map((frog, i) => {
          return <section key={i}>{frog}</section>
        })}
      </>
    );
  }
  return (
    <>
      <div className="goods-item">{mapeoData()}</div>
      {/*<section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>*/}
    </>
  );
}

 
// Mercancy.propType = {
//   cookie: PropTypes.array.isRequired,
//   egg: PropTypes.array.isRequired,
//   frog: PropTypes.array.isRequired,
// };


export default Mercancy;
