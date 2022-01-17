import * as React from "react"

import Layout from "../components/layout"
import { Hero } from "../components/hero"
import  About  from "../components/about"
import { Projects } from "../components/projects"
import { Services } from "../components/services"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Start" />
    <Hero/>
    <About />    
    <Services />
    <Projects />
  </Layout>
)


export default IndexPage
