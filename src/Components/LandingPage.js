import React from 'react'
import { Navb } from './Navb'
import '../styles/landingPage.css'
import { PrincipalContent } from './PrincipalContent'
import { CreateLink } from './CreateLink'

export const LandingPage = () => {
  return (
    <div>
        <Navb/>
        <PrincipalContent/>
        <CreateLink/>
    </div>
  )
}
