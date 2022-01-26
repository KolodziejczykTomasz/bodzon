import * as React from "react"

import Layout from "../components/layout"
import { Hero } from "../components/hero"
import { Projects } from "../components/projects"
import About from "../components/about"
import { Maps } from "../components/maps"
import { Services } from "../components/services"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Start" />
    <Hero />
    <About />
    <Services />
    <Projects />
    <Maps />
  </Layout>
)

export default IndexPage
