import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import { tours } from './data'
import Loading from './components/Loading'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  console.log(data)

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
      <Tours tours={data} />
    </section>
  )
}
export default App
