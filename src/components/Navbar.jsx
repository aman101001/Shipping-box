
import{
    MDBCollapse,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
}from "mdbreact";

function Navbar(props){
  return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Shipping Box</strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" navbar>
        <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                 className="waves-effect wavess-light"
                     to={props.navLink.path}
                    >
                     {props.navLink.Lable}
                 </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    )
  }


export default Navbar;