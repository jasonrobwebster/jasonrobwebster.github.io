import React from "react"

import styled from "styled-components"

import { PageWrapper } from "../components"
import { A, HyphenatedText } from "../components/text"

const Home = () => {
  return (
    <React.Fragment>
      <PageWrapper lastUpdated={new Date(2021, 8, 7)}>
        <HyphenatedText className="Home__Content">
          <Center>
            <Me />
          </Center>
          <p>Hi, I'm Jason.</p>
          <p>
            <b>Personally,</b> I'm a software and science loving guy who likes
            figuring out how stuff works. I'm into maths, physics, tech,
            philosophy, and video games. In my spare time, I like writing
            articles for this blog, learning new tech stacks. I also usually
            play indie games, but right now I'm playing "Legends of Runeterra".
          </p>
          <p>
            <b>Professionally,</b> I'm a full stack engineer and data scientist.
            I am the pricing and distribution lead at{" "}
            <A href="https://kandua.com">Kandua</A>, a matching platform for
            artisans. In the past, I have been a data science tutor at{" "}
            <A href="https://explore-datascience.net/">Explore</A> and a data
            science consultant at <A href="https://percept.co.za">Percept</A>.
            Despite my data science history, I would say I'm more a fan of the
            intersection between full stack engineering and data science.
          </p>
          <h2>This blog</h2>
          <p>
            I built this blog as a means of sharing what I have learnt about
            data science, tech, stats, and anything else I enjoy really. I built
            and designed it from scratch using the Gatsby JS framework. I wrote
            an article about how I built it{" "}
            <A href="/blog/building-a-personal-blog">here</A>. The{" "}
            <A href="https://github.com/jasonrobwebster/jasonrobwebster.github.io">
              source code
            </A>{" "}
            for the blog is available under the MIT license at GitHub.
          </p>
          <h2>Contact</h2>
          <p>
            If you'd like to contact me, you can do so via{" "}
            <A href="mailto:jasonrobwebster@gmail.com">Email</A>,{" "}
            <A href="https://twitter.com/jasonrobwebster">Twitter</A>, or{" "}
            <A href="https://www.linkedin.com/in/jasonrobwebster/">LinkedIn</A>.
            Also, feel free to check out my{" "}
            <A href="https://github.com/jasonrobwebster">GitHub</A> if you are
            interested in my projects. If you like my blog, bookmark it for now
            - an email list is coming soon!
          </p>
        </HyphenatedText>
      </PageWrapper>
    </React.Fragment>
  )
}

export default Home

const Center = styled.div`
  display: flex;
  align-items: center;
`

const Me = styled.img.attrs((props) => ({
  src: props.src || "/images/me.jpg",
}))`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 1rem;
  border-radius: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
`
