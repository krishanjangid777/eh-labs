import React from 'react'
import { BackgroundBeamsWithCollisionDemo } from '../components/core/BackgroundBeamsWithCollisionDemo'
import FounderMessage from '../components/core/FounderMessage'
import Brands from '../components/core/Brands'
import Privacy from '../components/core/Privacy'
import ValuesAndPrincipals from '../components/core/ValuesAndPrincipals'

const Home = () => {
  return (
    <>
    <BackgroundBeamsWithCollisionDemo />
    <FounderMessage />
    <Brands />
    <Privacy />
    <ValuesAndPrincipals />
    </>
  )
}

export default Home