import Layout from '../../hocs/layouts/Layout'
import Header from '../../components/cases/Header'
import React from 'react'
import CasesList from '../../components/cases/CasesList'

const Cases = () => {
  return (
    <Layout>
      <Header/>
      <CasesList/>
    </Layout>
  )
}

export default Cases