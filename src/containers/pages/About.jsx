import TestStats from '../../components/about/TestStats'
import Header from '../../components/about/Header'
import Layout from '../../hocs/layouts/Layout'
import React, { useEffect } from 'react'
import Images from '../../components/about/Images'
import Clients from '../../components/about/Clients'
import Features from '../../components/about/Features'
import Team from '../../components/about/Team'
import CTA from '../../components/about/CTA'

const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <Layout>
      <Header/>
      <TestStats/>
      <Images/>
      <Clients/>
      <Features/>
      <Team/>
      <CTA/>
    </Layout>
  )
}

export default About