import React, {useState} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

const Header = () =>{
  const[menuCollaps, setMenuCollaps] = useState(false);
  const isWideEnough = useState(false);
  return(
    <div className="navMenu">
      <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
        <MDBNavbarBrand href="/">
          <strong>Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={()=>setMenuCollaps(true)} />
        <MDBCollapse navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Services</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Service1</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Service2</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Service3</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Service4</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/book-now">Book Now</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about-us">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact-us">Contact Us</MDBNavLink>
            </MDBNavItem>

            


          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
{console.log(menuCollaps)}

      
    </div>
  )
}

export default Header;