import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { editSeries } from "../actions/seriesActions"

function UpdateItem({ endEditMode, data }) {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title: data.title,
    author: data.author
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedSeries = formData
    console.log(updatedSeries)
    dispatch(editSeries(data.id, updatedSeries))
    endEditMode()
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="submit-form">
        <div className="field">
          <label htmlFor="title" className="label is-small">Title</label>
          <div className="control">
            <input
              className="input is-small is-rounded"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="author" className="label is-small">Author</label>
          <div className="control">
            <input
              className="input is-small is-rounded"
              name="author"
              type="text"
              value={formData.author}
              onChange={handleChange} />
          </div>
        </div>
        <div className="field">
          <button className="button is-small is-white is-rounded" type="submit">Done!</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateItem