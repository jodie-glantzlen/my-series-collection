import React, { useEffect, useState } from "react"
import { getSeries } from '../apis/seriesApi'
import Item from './Item'

function Collection () {
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
        <h2>My Collection</h2>
      </header>
      <section className="main">
        {
          series.map((item) => {
            return (
              <Item key={item.id} data={item} refreshSeries={refreshSeries} />
            )
          })
        }
      </section>
    </>
  )}

  export default Collection