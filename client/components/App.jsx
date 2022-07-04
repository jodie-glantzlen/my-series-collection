import React, { useState, useEffect } from 'react'
import { getSeries } from '../apis/seriesApi'

function App() {

  const [series, setSeries] = useState([])

  useEffect(() => {
    refreshSeries()
  }, [])

  const refreshSeries = () => {
    getSeries()
      .then((res) => {
        setSeries(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        {
          series.map((item) => {
            return (
              <p key={item.id}>{item.title} by {item.author}</p>
            )
          })
        }
      </section>
    </>
  )
}


export default App
