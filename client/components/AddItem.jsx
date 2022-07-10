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

  // const resetFormData = () => {
  //   const clearFormData = {
  //     title: '',
  //     author: ''
  //   }
  //   setFormData(clearFormData)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSeries = formData
    dispatch(addSeries(newSeries))
    // resetFormData() --> doesn't work

    // setFormData({
    //   title: '',
    //   author: ''
    // })
    // --> doesn't work either
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title" className="label is-small">Title</label>
          <div className="control">
            <input
              className="input is-small is-rounded"
              name="title"
              type="text"
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
              onChange={handleChange} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-small is-light is-rounded is-focused" type="submit">Add</button>
          </div>
        </div>
      </form>
    </>

  )
}

export default AddItem