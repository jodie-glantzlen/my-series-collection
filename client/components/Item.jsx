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

  const getContent = () => {
    if (editMode) {
      return <UpdateItem
        itemId={data.id}
        endEditMode={() => setEditMode(false)}
      />
    } else {
      return (
        <div>
          <p>{data.title} by {data.author}</p>
          <div className="field-is-grouped">
            <div className="control">
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )
    }
  }

  return <>
    {getContent()}
    <div className="control">
      <button onClick={toggleEditMode}>
        {editMode ? "Cancel" : "Update"}
      </button>
    </div>
  </>

}

export default Item
