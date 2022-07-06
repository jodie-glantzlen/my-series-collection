import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { editSeries } from "../actions/seriesActions"

function UpdateItem({itemId, endEditMode}) {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title: '',
    author: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedSeries = formData
    console.log(updatedSeries)
    dispatch(editSeries(itemId, updatedSeries))
    endEditMode()
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label htmlFor="author">Author:
        <input type="text" name="author" onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Done!</button>
    </form>
  </div>
  )
}

export default UpdateItem