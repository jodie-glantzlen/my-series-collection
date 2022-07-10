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
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSeries = formData
    dispatch(addSeries(newSeries))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title" className="label">Title</label>
          <div className="control">
            <input className="input is-small is-rounded" name="title" type="text" onChange={handleChange} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="author" className="label">Author</label>
          <div className="control">
            <input className="input is-small is-rounded" name="author" type="text" onChange={handleChange} />
          </div>
        </div>
          <div className="control">
            <button onClick={handleSubmit}>Add</button>
          </div>
      </form>
    </>

  )
}

export default AddItem