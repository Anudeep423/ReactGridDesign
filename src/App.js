import React, { Component } from 'react'
import "./styles.css"
import Header from './Header'
import LatestPost from "./LatestPost"


export class App extends Component {

render(){
  return(
    <div>
      <Header />
      <LatestPost />
      {/* <i class="fa fa-filter" style={{fontSize : "20px"}} ></i>
      <i class="fa fa-caret-down" aria-hidden="true"></i> */}
    </div>
  )
}
}

export default App