import React, { Component } from 'react'

export class LatestPostComp extends Component {
  render() {
    return (
      <main>
        <h3 class="LatestPosts__LatestPostHeading__1-yOc">Latest Posts</h3>
        <p style={{display : "flex"}} > 
        <i className='fa fa-filter' style={{ color : "blue" , display : "block" , marginTop : "2px" }} >  </i>
        <span style={{ display : "block" , marginLeft : "10px" }}> Filter by category </span> </p>
        <div id ="filter-wrapper" >
        <span className='filter-all' > All </span>
        <span className='filter-name' > Sample name </span>
        <span className='filter-name' > Sample name </span>
        <span className='filter-name' > Sample name </span>
        <span className='filter-name' > Sample name </span>
        <span className='filter-name' > Sample name </span>
        <span className='filter-name' > Sample name </span>
        <span className='filter-name' > Sample name </span>
        <span className='filter-name' > Sample name </span>
        <span className='filter-name' > Sample name </span>
        </div>


          </main>
    )
  }
}

export default LatestPostComp