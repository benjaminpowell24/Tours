import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <h2 className="title ">Our Tours</h2>
      <div className="title-underline"></div>
      <ul className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </ul>
    </section>
  )
}
export default Tours
