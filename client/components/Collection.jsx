import React, { useEffect } from "react"
import Item from './Item'
import { getSeries } from '../actions/seriesActions'
import { useDispatch, useSelector } from "react-redux"

function Collection() {
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
      <section className="collection-content">
        {
          series.map((item) => {
            return (
              <Item key={item.id} data={item} />
            )
          })
        }
      </section>
    </>
  )
}

export default Collection