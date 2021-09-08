import React, { useState } from "react"

import styled from "styled-components"

import { A } from "../../components/text"
import { ArticleWrapper, BlogCard } from "../../components"

const BuildingMyOwnBlog = () => {
  return (
    <ArticleWrapper
      title="Building an interactive personal blog with React and Gatsby JS"
      description="How to build an interactive personal blog with the React and Gatsby JS frameworks."
      lastUpdated={new Date(2021, 8, 7)}
    >
      <h1>Building an interactive personal blog with React and Gatsby JS</h1>
      <p>
        I've always wanted a personal blog. A small piece of the internet that I
        could call home. I also really wanted a blog that I created from
        scratch. While I could have very easily turned to tools like Squarespace
        or Medium, the idea of owning my own website that I built from scratch
        was something that was very appealing to me. I wanted to learn how to
        build websites, and the tools needed to build them.
      </p>
      <p>
        Unlike existing blogs, I also wanted to build a blog that could be
        interactive. I believe that blogs could have an incredible amount of
        potential as an interactive form of reading. As a simple example, you
        could press a button in order to change its internal state (something
        like this button here <InteractiveButton />
        ). A more complicated example might involve a reader interacting with
        visualizations, code examples, graphs, or other objects. Many existing
        blogging tools just didn't have this option (or if they did, I couldn't
        find it), so I decided to build my own.
      </p>
      <p>
        It seems fitting then that my first blog article should be about its own
        creation. In this article, I discuss how I built this interactive
        personal blog using the React and Gatsby JS frameworks. I'll go from the
        design process, to its implementation, to how I hosted it on GitHub
        Pages. I've also open sourced this blog under the MIT License, and it is
        available at{" "}
        <A href="https://github.com/jasonrobwebster/jasonrobwebster.github.io">
          GitHub
        </A>{" "}
        for anyone to use or learn from.
      </p>
      <section>
        <h2>Requirements</h2>
        <p>Off the bat, I knew I wanted two things from my blog.</p>
        <ol>
          <li>
            The ability to write interactive content. Visualizations, graphs,
            and custom calculators for example.
          </li>
          <li>For people to reach my pages via search engines.</li>
        </ol>
        <p>
          I also wanted to use <A href="https://reactjs.org/">React</A> for my
          interactive content.
        </p>
        <p>
          <A href="https://www.gatsbyjs.com/">Gatsby</A> helps solve all of the
          above requirements. It generates static pages that are then "hydrated"
          with React code on the client side. Having static, pre-rendered pages
          is important for search engine web-crawlers, since they can't normally
          read the JS code in the otherwise empty single page app that React
          would generate.
        </p>
        <p>
          I, ofcourse, did not start with Gatsby. I decided to make my life
          difficult by thinking I could create my own solution to my problems. I
          wanted to use my own custom webpack, babel, and react configurations,
          despite knowing of Gatsby's existence. I struggled with this for weeks
          before swallowing my pride. Do not be like me. Do not make your life
          difficult. Just use Gatsby.
        </p>
      </section>
      <section>
        <h2>Design</h2>
        <p>
          Design is an incredibly important and often overlooked step of
          creating a website, particularly for beginner web devs or people (like
          me) who like coding more than looks. If you are creating a blog from
          scratch, you need to start with design. I use{" "}
          <A href="http://www.figma.com">Figma</A> to design my websites. It's a
          fairly ubiquitous industry tool that has the distinct advantage of
          being free (as compared to something like Adobe XD).
        </p>
        <p>
          To begin, I collected references of blogs that would appeal to my
          target audience. Since my target audience would be people like me, I
          collected references from the blogs I like. Once I had my reference
          material, I decided what elements I liked and disliked. I would
          include the elements I like, and cut what I dislike.
        </p>
        <p>
          I used <A href="https://www.redblobgames.com/">Red Blob Games</A> and{" "}
          <A href="https://medium.com/">Medium</A> as my two main sources of
          references. The former as an example of a personal blog that I really
          like (that also had interactive content). The latter I used for
          something with more broad appeal.
        </p>
        <p>
          My initial design for this blog can be seen{" "}
          <A href="/images/blog-design.png">here</A>. There are a few
          differences here and there between the initial design and the final
          product you're now reading. I opted for a smaller footer bar without a
          nav menu and slightly less width for the page contents, but the
          overall wireframe remained intact.
        </p>
        <p>
          During this process, I ended up asking myself way more questions about
          text display than I thought I would initially. What size of text is
          ideal? How should it reactively scale according to the size of the web
          browser? What's the ideal number of characters per line (apparently,
          around{" "}
          <A href="https://baymard.com/blog/line-length-readability">
            65 characters
          </A>
          ). I used my browser's dev tools on my reference blogs in order to
          help answer these question. I wouldn't have made any progress had I
          not had those references. Long story short, use references!
        </p>
      </section>
      <section>
        <h2>Implementation</h2>
        <p>
          I'll cover the technical implemetation of the blog here. I'll only be
          covering the "interactive blog" bit, and won't be covering like the
          styling, css, SEO optimization, etc.
        </p>
        <p>
          I didn't start a Gatsby project the{" "}
          <A href="https://www.gatsbyjs.com/docs/quick-start/">normal way</A> (
          i.e. using <code>npm init gatsby</code>). Instead, I started a Gatsby
          project from scratch, using:
        </p>
        <pre>
          <code className="language-shell">npm i gatsby react</code>
        </pre>
        <p>
          In order for gatsby to actually build websites from my code, I needed
          a particular folder structure. I ended up with this:
        </p>
        <pre>
          <code>{folderStructure}</code>
        </pre>
        <p>
          For those new to Gatsby, the <code>src/pages/</code> directory is most
          important. React components written there will be automatically
          compiled into their own html pages that are then hydrated on the
          client side. In other words, I'd be able to write React code in a file
          named <code>src/pages/page-name.jsx</code> and have it rendered at the{" "}
          <code>/page-name/</code> endpoint.
        </p>
        <p>
          The key idea to create my interactive blog posts was to write blogs in
          React under the <code>src/pages/blog/</code> directory. I'd then use
          the <code>/blog/</code> endpoint (generated by the{" "}
          <code>src/pages/blog/index.jsx</code> file) to route users to the
          posts. This isn't the most ideal solution: I'll have to write my blogs
          in code (instead of something like Markdown or an in browser editor)
          and will have to push my changes to GitHub everytime I write a new
          article. But, importantly, the solution works, and you wouldn't be
          reading this blog without this solution.
        </p>
        <p>
          An example of an interactive blog post would be something that uses
          React's <code>useState</code> hook:
        </p>
        <pre>
          <code className="language-jsx">{exampleBlog}</code>
        </pre>
        <p>
          That's it for how I wrote the interactive blog posts. To actually
          connect the blog posts to my blog root endpoint, I set up a
          "datastore" to hold the location and metadata for each of my blogs.
          The <code>slug</code> stored the endpoint, which as discussed above
          was basically the name of the file that contained my page. I also
          included a <code>published</code> tag that would hide it from the root
          page, in case I ever wanted to do that. The "blog datastore" ended up
          just being a variable that looked like:
        </p>
        <pre>
          <code className="language-javascript">{blogConst}</code>
        </pre>
        <p>
          I'd then be able to use this to generate each link to my blog, using a
          custom built <code>{"<BlogCard />"}</code> component (inspired
          directly by my{" "}
          <A href="https://www.redblobgames.com/">Red Blob Games</A> reference,
          and my love of cards in general):
        </p>
        <pre>
          <code className="language-jsx">{blogPage}</code>
        </pre>
        <pre>
          <code className="language-jsx">{blogCard}</code>
        </pre>
        <p>
          When all combined (with a little css styling), I'd have a nice set of
          cards at the <code>/blog/</code> endpoint, each linking to my
          published interactive blog posts:
        </p>
        <CardDisplay>
          <BlogCard
            key={1}
            url="#"
            title="Build­ing an in­ter­ac­tive blog with Re­act and Gats­by JS"
            description="How I built a personal blog with React and Gatsby JS."
            tag="Tech"
            imageLink="/images/blog.png"
          />
        </CardDisplay>
        <p>
          And... that's about it for the "interactive blog" part of the
          implementation. The rest of the implementation was basically getting
          the styles and UI/UX to match my initial design, which I won't cover
          here.
        </p>
      </section>
      <section>
        <h2>Deploying to GitHub Pages</h2>
        <p>
          GitHub pages is a free way to host a personal blog. In order to set
          this up, you need to have a repo named{" "}
          <code>{"<username>"}.github.io</code>. In my case, that's{" "}
          <code>jasonrobwebster.github.io</code>. Then, in the repo's Settings
          &gt; Pages, you need to specify the branch that the your site will be
          built from. Set it to the <code>gh-pages</code> branch. If you don't
          have this branch yet, create it.
        </p>
        <p>
          We'll deploy our site using the <code>gh-pages</code> package. This
          will send a local directory to our repo's <code>gh-pages</code>{" "}
          branch. Since we've set up our repo with the <code>gh-pages</code>{" "}
          branch, this should work off the bat, but we'll require a small
          configuration line to make sure we upload the <code>public/</code>{" "}
          directory.
        </p>
        <p>
          First, we'll install the <code>gh-pages</code> package
        </p>
        <pre>
          <code className="language-shell">npm i gh-pages</code>
        </pre>
        <p>
          Before we deploy our blog, we need to build our pages from our source
          code. In our <code>package.json</code>, set up the following scripts.
          Note that we are uploading the <code>public/</code> directory to the{" "}
          <code>gh-pages</code> branch using the{" "}
          <code>gh-pages -d pub­lic</code> script.
        </p>
        <pre>
          <code className="language-json">{packageJson}</code>
        </pre>
        <p>Then run</p>
        <pre>
          <code className="language-shell">npm run build</code>
        </pre>
        <p>
          Our blog will be built in the <code>public/</code> directory. To
          deploy our built website, we run
        </p>
        <pre>
          <code className="language-shell">npm run deploy</code>
        </pre>
        <p>
          Going to <code>{"<username>"}.github.io</code>, you should see your
          built website, ready for anyone to use. And because we're using
          Gatsby, we have prerendered <code>html</code> pages for search engines
          to crawl (we're still not optimised for SEO though, to do that we can
          follow{" "}
          <A href="https://www.gatsbyjs.com/docs/add-seo-component/">
            this guide
          </A>
          ).
        </p>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>
          We've managed to design, implement, and deploy an interactive personal
          blog using the React and Gatsby framework. We can use it to write
          interactive blog posts in React code, and generate an SEO optimized
          page that we host on GitHub. For any more details, feel free to browse
          this blog's{" "}
          <A href="https://github.com/jasonrobwebster/jasonrobwebster.github.io">
            source code
          </A>{" "}
          on GitHub.
        </p>
      </section>
    </ArticleWrapper>
  )
}

export default BuildingMyOwnBlog

const InteractiveButton = () => {
  const [value, setValue] = useState(0)

  const increaseValue = () => {
    setValue(value + 1)
  }
  return <StyledButton onClick={increaseValue}>{value}</StyledButton>
}

const CardDisplay = styled.div`
  display: flex;
  justify-content: center;

  padding-bottom: 1.5rem;
`

const StyledButton = styled.button`
  display: inline-block;
  position: relative;
  padding: 0.1rem 0.5rem 0.2rem;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text.light};

  border: 0px solid;
  border-radius: 0.25rem;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    top: -2px;
  }

  &:active {
    top: 0px;
  }
`

const folderStructure = `jasonrobwebster.github.io/
  ├── src/
  |   ├── components/
  |   ├── pages/
  |   |   ├── blog/
  |   |   |   ├── index.jsx
  |   |   |   ├── blog-article-1.jsx
  |   |   |   ├── blog-article-2.jsx
  |   |   |   ├── ...
  |   |   ├── contact.jsx
  |   |   ├── index.jsx
  |   |   ├── tools.jsx
  |   ├── shared
  |   |   ├── styles/
  |   |   ├── devices.js
  |   |   ├── theme.js
  ├── .eslintrc
  ├── .git
  ├── .gitignore
  ├── .prettierignore
  ├── .pretterrc.js
  ├── gatsby-browser.js
  ├── gatsby-config.js
  ├── gatsby-ssr.js
  ├── LICENSE
  ├── package-lock.json
  ├── package.json
  └── root-wrapper.js
`

const exampleBlog = `// src/pages/example-blog.jsx

import React, { useState } from "react"

import { ArticleWrapper } from "../../components"

const exampleBlog = () => {
  const [value, setValue] = useState(0)

  const increaseValue = () => {
    setValue(value + 1)
  }

  return (
    <ArticleWrapper lastUpdated={new Date(2021, 8, 7)}>
      <button onClick={increaseValue}>{\`Value: \${value}\`}</button>
    </ArticleWrapper>
  )
}

export default exampleBlog
`

const blogConst = `// src/pages/blog/index.jsx

// blog card datastore
const blogs = [
  {
    title: "Example blog title",
    description: "Example blog description",
    tag: "Tech",
    slug: "example-blog", // for src/pages/blog/example-blog.jsx
    image: "images/blog.png",
    published: false,
    lastUpdated: new Date(2021, 8, 3),
  },
]`

const blogPage = `// src/pages/blog/index.jsx

import React from "react"

import fp from "lodash/fp"

import { BlogCard, PageWrapper } from "../../components"

const Blog = ({ location }) => {
  const publishedBlogs = fp.filter((blog) =>
    isProduction ? blog.published : true
  )(blogs)
  const lastBlog = fp.maxBy((blog) => blog.lastUpdated)(blogs)

  return (
    <React.Fragment>
      <PageWrapper lastUpdated={lastBlog.lastUpdated}>
        <CardContent>
          {fp.flow(
            fp.sortBy((blog) => -(blog.lastUpdated || new Date())),
            fp.map((blog) => (
              <BlogCard
                key={blog.slug}
                url={\`\${location.pathname}/\${blog.slug}\`}
                title={blog.title}
                imageLink={blog.image}
                description={blog.description}
                tag={blog.tag}
              />
            ))
          )(publishedBlogs)}
        </CardContent>
      </PageWrapper>
    </React.Fragment>
  )
}

export default Blog
`

const blogCard = `// src/components/BlogCard.jsx

import React from "react"

import { Link } from "gatsby"

import { HyphenatedText } from "./text"

const BlogCard = ({ url, title, imageLink, description, tag }) => {
  return (
    <React.Fragment>
      <Card to={url}>
        <Card.Content>
          <Card.Image src={imageLink} />
          <Card.Text>
            <Card.Title>
              <HyphenatedText>{title}</HyphenatedText>
            </Card.Title>
            <Card.Description>
              <HyphenatedText>{description}</HyphenatedText>
            </Card.Description>
            <Card.Tag>{tag}</Card.Tag>
          </Card.Text>
        </Card.Content>
      </Card>
    </React.Fragment>
  )
}

export default BlogCard
`

const packageJson = `// package.json
"scripts": {
  "dev": "gatsby develop",
  "build": "gatsby build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d public",
  "serve": "gatsby serve",
  "clean": "gatsby clean"
}
`
