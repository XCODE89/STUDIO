
import Layout from '../../hocs/layouts/Layout'
import React from 'react'
import Footer from '../../components/navigation/Footer'
import Header from '../../components/home/Header'
import Incentives from '../../components/home/Incentives'
import UseCases from '../../components/home/UseCases'
import Features from '../../components/home/Features'
import CTA from '../../components/home/CTA'
import Clients from '../../components/home/Clients'

const Home = () => {
  return (
    <Layout>
      <Header/>
      <Incentives/>
      <UseCases/>
      <Features/>
      <CTA/>
      <Clients/>
    </Layout>
  )
}

export default Home