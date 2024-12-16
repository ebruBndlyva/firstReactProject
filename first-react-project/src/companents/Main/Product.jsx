
import Span from "./Span"


function Product({ name, description, price, score,sale }) {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-img">
          <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="card-img" />
        </div>
        <div className="card-desc">
          <h3>{name}</h3>
          <span>{score==true ? "⭐⭐⭐⭐⭐" : ""}</span>
          <p>{description}</p>
          <span>{price}</span>
          <span>{sale==true ? <Span/> : ""}</span>
          <button>View options</button>
        </div>
      </div>
    </>
  )
}

export default Product
