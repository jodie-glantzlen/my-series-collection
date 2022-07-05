import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addSeries } from "../actions/seriesActions"

function AddItem() {

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
    const newSeries = formData
    dispatch(addSeries(newSeries))
  }

  return (
    <div>
      <h3>Add new series</h3>
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

export default AddItem