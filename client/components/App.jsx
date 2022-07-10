import React from 'react'
import Collection from './Collection'
import Wishlist from './Wishlist'


function App() {
  return (
    <div className='hero-body'>
      <h1 className='title has-text-centered'>SERIES!</h1>
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <Collection />
          </div>
          <div className='column is-4'>
            <Wishlist />
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
