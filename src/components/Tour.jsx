import { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [toggleInfo, setToggleInfo] = useState(false)

  return (
    <li>
      <article className="single-tour">
        <small className="tour-price">${price}</small>
        <img className="img" src={image} alt={name} />
        <div className="tour-info">
          <h5>{name}</h5>
          {toggleInfo ? (
            <span>
              <p>{info}</p>
              <button
                className="info-btn"
                onClick={() => setToggleInfo(!toggleInfo)}
              >
                Hide More
              </button>
            </span>
          ) : (
            <span>
              <p>{info.substring(0, 250)}...</p>
              <button
                className="info-btn"
                onClick={() => setToggleInfo(!toggleInfo)}
              >
                Read More
              </button>
            </span>
          )}
        </div>
        <button
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </article>
    </li>
  )
}
export default Tour
