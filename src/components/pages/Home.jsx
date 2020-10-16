import React from 'react'
import Cards from '../Cards'
import HeroSection from '../HeroSection'
import JobsApi from '../../JobsApi'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <JobsApi/>
    </>
  )
}

export default Home
