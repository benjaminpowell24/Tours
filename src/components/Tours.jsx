import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <ul className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </ul>
    </section>
  )
}
export default Tours
