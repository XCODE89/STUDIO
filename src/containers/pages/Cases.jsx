import Layout from '../../hocs/layouts/Layout'
import Header from '../../components/cases/Header'
import React, { useEffect } from 'react'
import CasesList from '../../components/cases/CasesList'

const Cases = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <Layout>
      <Header/>
      <CasesList/>
    </Layout>
  )
}

export default Cases