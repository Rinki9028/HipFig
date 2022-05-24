import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
            <>
         <div className='mainDiv'>
           <nav className='navbar navbar-expand-lg navbar-light bg-light md-2'>
             <div className='container-fluid'>
               <img
                 className='img-responsive' src='https:hipfig.b-cdn.net/templates/hipfig/images/Home_page.png'
                 height='60px' width='150px' alt=''
               />

               <div className='menus' id='navbarSupportedContent'>
                 <ul className='navbar-nav mb-2 mb-lg-0'>
                 <Link to='Login.tsx' className='menu'><li className='nav-item'><h5 className='nav-link'>Home</h5></li></Link>
                 <Link to='' className='menu'><li className='nav-item'><h5 className='nav-link'>Flite</h5></li></Link>
                 <Link to='' className='menu'><li className='nav-item'><h5 className='nav-link'>Info</h5></li></Link>
                 <Link to='' className='menu'><li className='nav-item'><h5 className='nav-link'>sport</h5></li></Link>
                 <Link to='' className='menu'><li className='nav-item'><h5 className='nav-link'>City</h5></li></Link>
                 <form className="d-flex">
        <input className="form-control me-2" style={{width:'9.  0%'}} type="search" placeholder="Search" aria-label="Search"/>
      </form>
                 </ul> 
 
               </div>
             </div>
           </nav>
           </div>
         </>
    )
  }
}

export default Navbar

