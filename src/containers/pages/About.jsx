import Header from '../../components/about/Header'
import Layout from '../../hocs/layouts/Layout'
import React, { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <Layout>
      <Header/>
    </Layout>
  )
}

export default About