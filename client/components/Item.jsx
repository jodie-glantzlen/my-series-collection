import React from "react"
import { useDispatch } from "react-redux"
import { removeSeries } from "../actions/seriesActions"


function Item({ data }) {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeSeries(data.id))
    //refreshSeries()
    // I don't need this because redux does it for me in the global state?
  }

  return (
    <div>
      <p>{data.title} by {data.author}</p>
      <button onClick={handleDelete}>Delete from collection</button>
    </div>
  )
}

export default Item