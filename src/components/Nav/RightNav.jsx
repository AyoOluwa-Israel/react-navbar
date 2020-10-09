import React from 'react';
import styled from 'styled-components';


const Ul = styled.ul `
    display: flex;
    list-style: none;
    flex-flow: row nowrap;
  li{
    padding: 18px 10px;
  }

  @media (max-width: 768px){
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({  open }) => open ? 'translateX(0)' : 'translateX(100%)' }; 
    top: 0;
    right: 0;
    height: 100vh;
    width: 270px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

  li{
    color: #fff;
  }
`;

const RightNav = ({ open })  => {
  return (

      <Ul open={open} >
        <li>Home</li>
        <li>About US</li>
        <li>Contact Us</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </Ul>
  )
}

export default RightNav