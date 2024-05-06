import NavBar from '../../components/navigation/NavBar'
import Layout from '../../hocs/layouts/Layout'
import React from 'react'
import Footer from '../../components/navigation/Footer'

const Home = () => {
  return (
    <Layout>
      <NavBar/>
      <div>Home</div>
      <Footer/>
    </Layout>
  )
}

export default Home