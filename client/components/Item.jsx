import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { removeSeries } from "../actions/seriesActions"
import UpdateItem from "./UpdateItem"


function Item({ data }) {

  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const handleDelete = () => {
    dispatch(removeSeries(data.id))
    //refreshSeries()
    // I don't need this because redux does it for me in the global state?
  }

  const displayContent = () => {
    if (editMode) {
      return <UpdateItem
        itemId={data.id}
        endEditMode={() => setEditMode(false)}
      />
    } else {
      return (
        <div className="collection-item">
          <p>{data.title} by {data.author}</p>
          <div className="control">
            <button className="button is-small is-light is-rounded" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )
    }
  }

  return <>
    {displayContent()}
    <div className="control">
      <button className="button is-small is-light is-rounded" onClick={toggleEditMode}>
        {editMode ? "Cancel" : "Update"}
      </button>
    </div>
  </>

}

export default Item
