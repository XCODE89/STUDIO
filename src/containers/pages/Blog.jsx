import { Helmet } from 'react-helmet-async'
import Layout from '../../hocs/layouts/Layout'
import React, { useEffect } from 'react'
import { get_categories } from '../../redux/actions/categories/categories'
import { connect } from 'react-redux'

const Blog = ({get_categories}) => {
  useEffect(() => {
    window.scrollTo(0,0)
    get_categories()
  },[])
  return (
    <Layout>
      <Helmet>
        <title>Studio | Blog</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de páginas web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        {/* url de tu pagina */}
        <link rel="canonical" href="https://www.murkiva.com/" /> 
        <meta name="author" content='Murkiva' />
        <meta name="publisher" content='Murkiva' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Murkiva | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="https://www.murkiva.com/" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='Murkiva | Software Agency' />
        <meta name="twitter:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'/>
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>Blog</div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories
})

export default connect(mapStateToProps,{

})( Blog)