import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" href="#">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/">Home </Link>
      <Link class="nav-item nav-link active" to="/testform">testform</Link>

      {/* <Link class="nav-item nav-link active" to="/">Home </Link> */}

      {/* <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar