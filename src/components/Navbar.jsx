import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarBurger, NavbarMenu, NavbarStart, NavbarEnd } from 'bloomer'
import { UserContext } from '../contexts/UserContext'
import SearchCity from "./SearchCity";
import FirebaseLogin from "./FirebaseLogin";

const Navigation = () => {

  const { user } = useContext(UserContext)
  // console.log(UserContext)
  // console.log(user.isLoggedIn)
  return (
    <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
      <NavbarBrand>
        <NavbarItem>
          City Life
          <Icon className='fa fa-github' />
        </NavbarItem>
        {/* <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} /> */}
      </NavbarBrand>
      {/* <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}> */}
      <NavbarStart>
        <NavbarItem href='/'>Home</NavbarItem>
        <NavbarItem href='/testAPI'>Test API</NavbarItem>
        <NavbarItem href='/cities'>Cities</NavbarItem>
        <NavbarItem href='/profile'>Profile</NavbarItem>
      </NavbarStart>
      <NavbarItem><SearchCity /></NavbarItem>
      <NavbarEnd>
        <FirebaseLogin />
        {/* {
          user.isLoggedIn ? <NavbarItem href='/logout'>Logout</NavbarItem>
            :
            <>

              <NavbarItem href='/login'>Login</NavbarItem>
              <NavbarItem href='/signup'>Sign Up</NavbarItem>
            </>
        } */}

      </NavbarEnd>
      {/* </NavbarMenu> */}
    </Navbar>

  );
};

export default Navigation;
