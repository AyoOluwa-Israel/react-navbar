import React from 'react'
import styled from 'styled-components'


const Hero = styled.div `
  width: 100%;
  height: 100vh;
  background-image: url("img/Hero.jpg");
  background-color: #CCBDF5;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: opacity(80%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  

.container{
  -webkit-animation: animate 3s infinite;
  animation: animate 5s;
  animation-iteration-count: infinite;
  transition: transform 2s;
  flex: 1, 1;
  width: 50%;
}

.general{
  display: flex;
  ${'' /* flex-wrap: wrap; */}
  align-items: center;
  margin: 0 auto;
}

.intro1 h1{
  font-size: 72px;
  color: white;
  width: 300px;
  flex: 1, 1;
  text-align: center;
}

.intro2 h1{
  font-size: 48px;
  color: white;
  width:300px;
  flex: 1, 1
  text-align: center;
}

@media(max-width: 768px){
  height: 100%;

  .general{
  flex-direction: column;
  }

  .container img{
    width: 600px
  }
  h1{
    text-align: center;
  }
}

@media(max-width: 430px){
  .container img{
    width: 350px
  }
  h1{
    font-size: 48px;
    text-align: center;
  }
}

@keyframes animate {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

`;

const HeroSection = () => {
  return (
    <Hero>
    <div className="general">
      <div className="intro1">
        <h1>Need A Vue Job</h1>
      </div>
      <div className="picture">
        <div className="container">
        <img src="img/iphone.png" alt=""/>
      </div>
      </div>
       <div className="intro2">
      <h1>You want to update us on one</h1>
      </div>
    </div>

    </Hero>
  )
}

export default HeroSection
