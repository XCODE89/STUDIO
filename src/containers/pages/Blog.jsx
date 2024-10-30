import { Helmet } from 'react-helmet-async'
import Layout from '../../hocs/layouts/Layout'
import React, { useEffect } from 'react'
import { get_categories } from '../../redux/actions/categories/categories'
import { connect } from 'react-redux'
import { get_blog_list, get_blog_list_page } from '../../redux/actions/blog/blog'
import CategoriesHeader from '../../components/blog/CategoriesHeader'
import BlogList from '../../components/blog/BlogList'
// import BlogList from '../../components/home/BlogList'

const Blog = ({
    get_categories, 
    categories, 
    get_blog_list, 
    // posts, 
    count, 
    next, 
    previous, 
    get_blog_list_page
  }) => {

  const posts = [
      {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' },
        description:
          'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
          name: 'Paul York',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        thumbnail:
            'https://images.pexels.com/photos/8250929/pexels-photo-8250929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        readingTime: '6 min',
      },
      {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
        description:
          'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        author: {
          name: 'Dessie Ryan',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        thumbnail:
            'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        readingTime: '4 min',
      },
      {
        title: 'Improve your customer experience',
        href: '#',
        category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        author: {
          name: 'Easer Collins',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        thumbnail:
            'https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        readingTime: '11 min',
      },
  ];

  useEffect(() => {
    window.scrollTo(0,0)
    get_categories()
    get_blog_list()
  },[])

  console.log("posts", posts, "categories", categories, "get_blog_list_page", get_blog_list_page, "count", count)
  
  return (
    <Layout>
      <Helmet>
        <title>Studio | Blog</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de páginas web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        {/* url de tu pagina */}
        <link rel="canonical" href="https://www.mapache.com/" />
        <meta name="author" content='Mapache' />
        <meta name="publisher" content='Mapache' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Mapache | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="https://www.mapache.com/" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='Mapache | Software Agency' />
        <meta name="twitter:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'/>
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="pt-12">
          <CategoriesHeader categories={categories&&categories}/>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
              <div className="mx-auto max-w-6xl my-10">
              {/* Content goes here */}
                <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_page} count={count&&count}/>
                {/* <BlogList/> */}
              </div>
          </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts : state.blog.blog_list,
  count : state.blog.count,
  next : state.blog.next,
  previous : state.blog.previous,
})

export default connect(mapStateToProps,{
  get_categories,
  get_blog_list,
  get_blog_list_page
})(Blog)