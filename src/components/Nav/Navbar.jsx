import React from 'react'
import styled from 'styled-components'
import Burger from './Burger';



const Nav = styled.nav `
  width: 100%;
  height: 55px;
  box-shadow: 1px 0px 5px 0px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo{
    padding-left: 4em; 
  }
  img{
    width: auto;
    height: 50px;
  }

  @media

`;
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src="img/logo192.png" alt=""/>
      </div>
      <Burger/>
    </Nav>
  
  )
}

export default Navbar
