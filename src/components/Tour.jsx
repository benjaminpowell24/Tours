const Tour = ({ id, image, info, name, price }) => {
  return (
    <li>
      <article className="single-tour">
        <small className="tour-price">${price}</small>
        <img className="img" src={image} alt={name} />
        <div className="tour-info">
          <h5>{name}</h5>
          <p>{info}</p>
        </div>
      </article>
    </li>
  )
}
export default Tour
