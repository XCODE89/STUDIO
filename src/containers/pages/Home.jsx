
import Layout from '../../hocs/layouts/Layout'
import React, { useEffect } from 'react'
import Footer from '../../components/navigation/Footer'
import Header from '../../components/home/Header'
import Incentives from '../../components/home/Incentives'
import UseCases from '../../components/home/UseCases'
import Features from '../../components/home/Features'
import CTA from '../../components/home/CTA'
import Clients from '../../components/home/Clients'
import BlogList from '../../components/home/BlogList'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <Layout>
      <Header/>
      <Incentives/>
      <UseCases/>
      <Features/>
      <CTA/>
      <Clients/>
      <BlogList/>
    </Layout>
  )
}

export default Home