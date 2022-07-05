import React, { useEffect } from "react"
import Item from './Item'
import { fetchSeries } from '../actions/seriesActions'
import { useDispatch, useSelector } from "react-redux"

function Collection () {
  const dispatch = useDispatch()

  useEffect(() => {
    refreshSeries()
  }, [])
  
  const refreshSeries = () => {
    dispatch(fetchSeries())
  }

  const series = useSelector(state => state.seriesReducer)
  
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