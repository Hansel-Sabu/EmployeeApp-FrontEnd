import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png"alt="InQuest" width="80" height="80"/>
    </a>
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="next">Our Employees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="search">Post your resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar