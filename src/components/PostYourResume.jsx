import React from 'react'
import Navbar from './Navbar'

const PostYourResume = () => {
  return (
    <div>
        <Navbar/>
        <br/>
        <div className="conatiner">
            <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">

                                <label for="" class="form-label">Name</label>
                                <input type="text" class="form-control"/>  

                                </div>

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label htmlFor="" className="form-label">Address</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    
                                    <label htmlFor="" className="form-label">Email ID</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">LinkedIn</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12">

                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Summary</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label for="exampleFormControlTextarea1" class="form-label">Work Experience</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                                </div>

                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <div class="mb-3">
                                <label for="formFile" class="form-label">Upload Certificates</label>
                                <input class="form-control" type="file" id="formFile"/>
                                </div>

                                </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default PostYourResume