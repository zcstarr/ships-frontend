import React from "react"
import PageTemplate from "./Util"
import { LandingBaseLayout } from "../components/Layout"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Join from "../components/Join"
import WhatMessage from "../components/WhatMessage"
import Community from "../components/Community"
import Faq from "../components/Faq"
import Footer from "../components/Footer"

function Landing(_props: any) {
  return (
    <>
      <LandingBaseLayout>
        <Header/>
        <Hero/>      
        <Join/>
        <WhatMessage/>
        <Community/>
        <Faq/>
      </LandingBaseLayout>
      <Footer/>
    </>
  )
}


export default PageTemplate(Landing)