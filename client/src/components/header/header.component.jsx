import React, { useState } from "react";
import profilePic from "../../assests/profile.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assests/Logo.png";
import { logoutUser } from "../../redux/actions/authActions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./header.styles.scss";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.auth);
  const onLogoutUser = event => {
    event.preventDefault();
    dispatch(logoutUser());
  };

  const authLinks = (
    <UncontrolledDropdown inNavbar>
      <DropdownToggle nav>
        <img className="profile-pic" src={profilePic} alt="user-priofile" />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>My Profile</DropdownItem>
        <DropdownItem>My Orders</DropdownItem>
        <DropdownItem>My Wallet</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={onLogoutUser}>Log Out</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
  const guestLinks = (
    <div className="option">
      <Link className="option" to="/login">
        Login
      </Link>
      <Link className="option" to="/signin">
        Sign Up
      </Link>
    </div>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img style={{ height: "35px" }} src={logo} alt="servicium-logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {/* <Link className="become-partner-link" to="/become-partner">
            <i className="fas fa-users-cog become-partner"></i>
            Become A Partner
          </Link> */}
          {loggedInUser.isAuthenticated ? authLinks : guestLinks}
        </Collapse>
      </Navbar>
      <div className="header-sub-menu">
        <ul>
          <li>
            <Link className="headre-nav-link" to="/electrical">
              Electrical
            </Link>
          </li>
          <li>
            <Link className="headre-nav-link" to="/plumbing">
              Plumbing
            </Link>
          </li>
          <li>
            <Link className="headre-nav-link" to="/painting">
              Painting
            </Link>
          </li>
          <li>
            <Link className="headre-nav-link" to="/home-cleaning">
              Home Cleaning
            </Link>
          </li>
          <li>
            <Link className="headre-nav-link" to="/appliances">
              Appliances
            </Link>
          </li>
          <li>
            <Link className="headre-nav-link" to="/carpentry">
              Carpentry
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
