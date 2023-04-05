import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        <h1>Welcome to the DevApp Web</h1>
        <p>Lorem Ipsum</p>
      </div>
      <div className="nav">
        <h3>Navigate to the Coctails Page here</h3>
        <Link to='/cocktails'>
          <button >Cocktails</button>
        </Link>

        <h3>Or Find out more about us</h3>
        <Link to='/about'>
          <button>About Page</button>
        </Link>
      </div>
    </div>
  )
}

export default Home