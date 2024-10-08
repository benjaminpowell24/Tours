import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import { tours } from './data'
import Loading from './components/Loading'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  const removeTour = (id) => {
    const filteredTours = data.filter((tour) => tour.id !== id)
    setData(filteredTours)
  }

  const resetTours = () => {
    setData(tours)
  }

  useEffect(() => {
    setTimeout(() => {
      setData(tours)
      setIsLoading(false)
    }, 3000)
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <h2 className="title ">Our Tours</h2>
      <div className="title-underline"></div>
      {data.length ? (
        <Tours tours={data} removeTour={removeTour} />
      ) : (
        <div style={{ textAlign: 'center', margin: 5 }}>
          <button className="btn" onClick={resetTours}>
            Reset
          </button>
        </div>
      )}
    </main>
  )
}
export default App
