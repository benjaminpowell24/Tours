import Tour from './Tour'

const Tours = ({ tours }) => {
  return (
    <section>
      <h2 className="title ">Our Tours</h2>
      <div className="title-underline"></div>
      <ul className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </ul>
    </section>
  )
}
export default Tours
