import React from 'react'
import AddItem from './AddItem'
import Collection from './Collection'

function App() {
  return (
    <div className='hero-body'>
      <h1 className='title has-text-centered'>My Series Collection</h1>
      <div className="main-container">
        <AddItem />
        <Collection />
      </div>
    </div>
  )
}


export default App
