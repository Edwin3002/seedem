import React from 'react'
import { Navb } from './Navb'
import '../styles/landingPage.css'
import { PrincipalContent } from './PrincipalContent'
import { CreateLink } from './CreateLink'
import { Cards } from './Cards'
import { Footer } from './Footer'

export const LandingPage = () => {
  return (
    <div>
        <Navb/>
        <PrincipalContent/>
        <CreateLink/>
        <Cards/>
        <Footer/>
    </div>
  )
}
