import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { removeSeries } from "../actions/seriesActions"
import UpdateItem from "./UpdateItem"


function Item({ data }) {

  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeSeries(data.id))
    //refreshSeries()
    // I don't need this because redux does it for me in the global state?
  }

  const getContent = () => {
    if (editMode) {
      return <UpdateItem
        id={data.id}
        endEditMode={() => setEditMode(false)}
        {...{ data }}
      />
    } else {
      return (
        <div>
          <p>{data.title} by {data.author}</p>
          <button onClick={handleDelete}>Delete from collection</button>
        </div>
      )
    }
  }

  return <>
  {getContent()}
  <button onClick={toggleEditMode}>
    {editMode ? "Cancel" : "Update"}
  </button>
</>

}

export default Item