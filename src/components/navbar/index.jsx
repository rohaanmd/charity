import React from 'react'
import { useParams } from 'react-router-dom'
import Logo  from "../../resources/images/logo.svg"

export default function Navbar() {

var {name} = useParams() ;

console.log({name});
    return (
        <div className="row nav-custom">
            <div className="col-2">
            <img src={Logo} alt="" className=" custom-logo img-thumbnail"  />
            </div>
            <div className="col-8 ">
    <div className="custom-align">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly custom-link-nav ">
        <li className="nav-item">
          <a className="nav-link" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">ABOUT</a>
        </li>
        <li className="nav-item">
             <a className="nav-link" href="/">RESOURCES</a>
        </li>
         
        <li className="nav-item">
          <a className="nav-link" href="/">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">CONTACT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">DONATION</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">EVENTS</a>
        </li>
        
        
      </ul>
            </div>
            </div>
            <div className="col-2 h-100 btn-div-header">

<button className="btn btn-success btn-lg custom-btn-donate">DONATE US</button>

welcome {name}

            </div>
        </div>
    )
}
