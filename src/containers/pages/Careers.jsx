import Layout from '../../hocs/layouts/Layout'
import Header from '../../components/careers/Header'
import React, { useEffect } from 'react'
import Testimonial from '../../components/careers/Testimonial'
import Features from '../../components/careers/Features'
import PositionsList from '../../components/careers/PositionsList'

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <Layout>
      <Header/>
      <Testimonial/>
      <Features/>
      <PositionsList/>
    </Layout>
  )
}

export default Careers