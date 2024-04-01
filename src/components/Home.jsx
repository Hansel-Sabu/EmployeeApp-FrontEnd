import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row g-3">
                <div className="col">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br/>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Job Title,keywords, or company" aria-label="Username"/>
                            <span class="input-group-text"></span>
                            <input type="text" class="form-control" placeholder="Location" aria-label="Server"/>
                        </div>
                        <br/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        <br/>
                        <br/>
                        <div className="row g-3">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://img.freepik.com/free-photo/jobs-new-business-launch-plan-concept_53876-124944.jpg?w=1060&t=st=1709575907~exp=1709576507~hmac=200542021dedfcd9cf14ff739230744d801454838ae35b0fca9df3d25fb3f0e0" class="d-block w-100" alt="..."/>
                                     </div>
                                    <div class="carousel-item">
                                        <img src="https://img.freepik.com/free-vector/recruitment-concept-landing-page_52683-44137.jpg?w=1060&t=st=1709576074~exp=1709576674~hmac=41b85a511c4fc9163b361b88f7f862247bf6bb2211f835e6d086603fb670d7fb" class="d-block w-100" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://img.freepik.com/premium-photo/online-job-search-modish-website-worker-search-job-opportunities_31965-57322.jpg?w=1060" class="d-block w-100" alt="..."/>
                                    </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                    </button>
                                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                    </button>
                                     </div>
                                </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        <ul class="nav justify-content-center">
        <li class="nav-item"> 
            <a class="nav-link disabled" aria-disabled="true">Language</a>
            </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">MALAYALAM </a>
         </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ENGLISH</a>
        </li>
        <li class="nav-item">
         <a class="nav-link" href="#">HINDI</a>
         </li>
        </ul>
    </div>
  )
}

export default Home