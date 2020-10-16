import React from 'react'
import styled from 'styled-components'
import Burger from './Burger';



const Nav = styled.nav `
  width: 100%;
  height: 55px;
  box-shadow: 1px 0px 5px 0px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  .logo{
    padding-left: 4em; 
  }
  img{
    width: 100px;
    height: auto;
  }

  @media (max-width: 768px){
    .logo{
    padding-left: 0.7em; 
  }
  
  }

`;
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src="img/logo.png" alt=""/>
      </div>
      <Burger/>
    </Nav>
  
  )
}

export default Navbar
