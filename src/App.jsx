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

  useEffect(() => {
    setTimeout(() => {
      setData(tours)
      setIsLoading(false)
    }, 3000)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <section>
      <Tours tours={data} removeTour={removeTour} />
    </section>
  )
}
export default App
