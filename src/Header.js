import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header>


                <div id="left-header-section" >
                    <div>
                        <ul>
                            <li id="logo">EDYODA</li>
                            <li id="logo-story">Stories</li>
                        </ul>
                    </div>
                    <div id="dropdown">
                        <span id="dropdown-text">Explore Categories<i className="fa fa-angle-down dropdown-icon"></i></span>
                    </div>
                </div>



                <div id="right-header-section" >
                    <div id="site-info" >
                        EdYoda is free learning and knowledge
                        <br></br>
                        sharing platform for techies
                    </div>
                    <div>
                    <button className="Button__Button__QI7b2" style={{ fontSize: "0.75em" ,boxShadow: "none"}}>Go To Main Website</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header