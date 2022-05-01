import React, { Component } from 'react'

export class LatestPost extends Component {
  render() {
    return (
       
      <div id = "latest-post-section" >
          <h2> Latest posts </h2>
      <p id="categories-container"><i className="fa fa-filter" style={{ color : "blue", margin : "5px"  }} ></i>Filter by Category</p>
      <span className="filter-text all">All</span>
      <span className="filter-text">Sample name</span>
      <span className="filter-text">Sample name</span>
      <span className="filter-text">Sample name</span>
      <span className="filter-text">Sample name</span>
      <span className="filter-text">Sample name</span>
      <span className="filter-text">Sample name</span>
      <span className="filter-text">Sample name</span>
      <span className="filter-text">Sample name</span>
      <span className="filter-text">Sample name</span>
      <span className="filter-text">Sample name</span>
      <br></br>
      <div id = "blog-section" >
        <div className='blog-card' >
          <img 
          className='blog-image'
          src='https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg'
          />
          <div className='blog-details' >
              <h3 className='blog-title' >Introducing you all to EdYoda -</h3>
              <p style={{ fontWeight : "300px" }} > <span className='blog-author' >  Author </span> | 05 Jul 2019 </p>
              <div className='blog-description' >
              Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and
              </div>
          </div>
          
        </div> 
        <div className='blog-card' >
          <img 
          className='blog-image'
          src='https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg'
          />
          <div className='blog-details' >
              <h3 className='blog-title' >Introducing you all to EdYoda -</h3>
              <p style={{ fontWeight : "300px" }} > <span className='blog-author' >  Author </span> | 05 Jul 2019 </p>
              <div className='blog-description' >
              Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and
              </div>
          </div>
          
        </div> 
        <div className='blog-card' >
          <img 
          className='blog-image'
          src='https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg'
          />
          <div className='blog-details' >
              <h3 className='blog-title' >Introducing you all to EdYoda -</h3>
              <p style={{ fontWeight : "300px" }} > <span className='blog-author' >  Author </span> | 05 Jul 2019 </p>
              <div className='blog-description' >
              Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and
              </div>
          </div>
          
        </div> 
        <div className='blog-card' >
          <img 
          className='blog-image'
          src='https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg'
          />
          <div className='blog-details' >
              <h3 className='blog-title' >Introducing you all to EdYoda -</h3>
              <p style={{ fontWeight : "300px" }} > <span className='blog-author' >  Author </span> | 05 Jul 2019 </p>
              <div className='blog-description' >
              Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and
              </div>
          </div>
          
        </div> 
        <div className='blog-card' >
          <img 
          className='blog-image'
          src='https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg'
          />
          <div className='blog-details' >
              <h3 className='blog-title' >Introducing you all to EdYoda -</h3>
              <p style={{ fontWeight : "300px" }} > <span className='blog-author' >  Author </span> | 05 Jul 2019 </p>
              <div className='blog-description' >
              Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and
              </div>
          </div>
          
        </div> 


      </div>
      </div>
     
      
    )
  }
}

export default LatestPost