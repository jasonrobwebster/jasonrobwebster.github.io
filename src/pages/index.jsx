import React from "react"

import { PageContent } from "../shared/styles"
import { FooterBar, PageWrapper } from "../components"
import { A, HyphenatedText } from "../components/text"

const Home = () => {
  return (
    <React.Fragment>
      <PageWrapper lastUpdated={new Date(2021, 7, 15)}>
        <PageContent>
          <HyphenatedText className="Home__Content">
            <h1>About me</h1>
            <p>
              Hi, I&apos;m Jason. Personally, I&apos;m a software and science
              loving gamer geek. I&apos;m into maths, physics, game design,
              tech, and am currently playing an unhealthy amount of
              &ldquo;Hollow Knight&rdquo; and &ldquo;Legends of
              Runeterra&rdquo;. I obtained an MSc in Physics with the goal of
              becoming an academic before making the decision to switch to
              industry. Professionally, I&apos;m a full stack engineer and data
              scientist at <A href="https://kandua.com">Kandua</A>. I am also
              learning the ropes in product management. In my day to day I use
              tools like React, Express, GCP, PostgreSQL, and Python to build{" "}
              <A href="https://kandua.com">Kandua</A> and gain insights into
              what its customer base is doing on the platform. Previously, I was
              a data science tutor at{" "}
              <A href="https://explore-datascience.net/">Explore</A> and a
              consultant at <A href="https://percept.co.za">Percept</A>.
            </p>
            <h1>This blog</h1>
            <p>
              I built this blog as a means of sharing what I have learnt about
              data science, tech, stats, and anything else I enjoy really. I
              built and designed it from scratch using React, styled-components,
              Webpack, and other tools (largely to teach myself how to build a
              blog from scratch). It is hosted on github using github pages at{" "}
              <A href="https://github.com/jasonrobwebster/jasonrobwebster.github.io">
                this repo
              </A>
              .
            </p>
          </HyphenatedText>
        </PageContent>
      </PageWrapper>
    </React.Fragment>
  )
}

export default Home
