import React, { useEffect } from "react"
import Item from './Item'
import { getSeries } from '../actions/seriesActions'
import { useDispatch, useSelector } from "react-redux"
import AddItem from "./AddItem"

function Collection () {
  const dispatch = useDispatch()

  useEffect(() => {
    refreshSeries()
  }, [])
  
  const refreshSeries = () => {
    dispatch(getSeries())
  }

  const series = useSelector(state => state.seriesReducer)
  
  return (
    <>
      <header className="header">
        <h2 className="has-text-centered">My Collection</h2>
      </header>
      <AddItem />
      <section className="main">
        {
          series.map((item) => {
            return (
              <Item key={item.id} data={item} />
            )
          })
        }
      </section>
    </>
  )}

  export default Collection