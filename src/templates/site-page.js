import React from 'react'
import Layout from '../components/Layout'


export const SitePageTemplate = () => {

  return (
    <section className="">
      <div>Test</div>
    </section>
  )
}


const SitePage = ({ data }) => {
  

  return (
    <Layout>
      <SitePageTemplate
      />
    </Layout>
  )
}


export default SitePage

