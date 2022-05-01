import React, { Component } from 'react'

export class LatestPost extends Component {
  render() {
    return (
        <div id = "latest-post-section" >
        <h3 className="LatestPosts__LatestPostHeading__1-yOc">Latest Posts</h3>
        <div>
        <div >
            <p> <i className='fa fa-filter' style={{  color : "blue" , marginTop : "5px" }} >  </i> Filter by Category </p>
            <span className='filter-all-name all' > All  </span>
            <span className='filter-name' > Sample name  </span>
            <span className='filter-name' > Sample name  </span>
            <span className='filter-name' > Sample name  </span>
            <span className='filter-name' > Sample name  </span>
            <span className='filter-name' > Sample name  </span>
            <span className='filter-name' > Sample name  </span>
            <span className='filter-name' > Sample name  </span>
            <span className='filter-name' > Sample name  </span>
            <span className='filter-name' > Sample name  </span>
        </div>
        </div>
        </div>
    )
  }
}

export default LatestPost