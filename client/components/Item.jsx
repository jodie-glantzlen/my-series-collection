import React from "react"

function Item ({data}) {
  return (
    <p>{data.title} by {data.author}</p>
  )
}

export default Item