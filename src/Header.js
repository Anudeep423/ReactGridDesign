import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header>
                <div id="left-header-section" >
                { /* Edyoda stories */ }
                <div>
                    <ul>
                        <li id = "logo" > EDYODA </li>
                        <li id = "logo-story" > Stories </li>
                    </ul>
                </div>

                { /* Dropdown  */ }
                <div id = "dropdown" >
                <p> Explore categories  <i className='fa fa-angle-down dropdown-icon' >  </i> </p>
                </div>



                </div>
                <div id="right-header-section" >
                <div class="BlogNavigationLinks__NonMobileOnly__2Ki-o"><p class="BlogNavigationLinks__EdyodaText__11wl2">EdYoda is free learning and knowledge <br></br> sharing platform for techies</p></div>
                <div>
                <button> Go to main website </button>
                </div>


                </div>
            </header>
        )
    }
}

export default Header