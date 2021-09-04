import React, { useEffect, useState } from "react"

import { ArticleWrapper } from "../../components"

const BuildingMyOwnBlog = () => {
  return (
    <ArticleWrapper lastUpdated={new Date(2021, 8, 3)}>
      <h1>Building a personal blog with Gatsby JS</h1>
      <p>{}</p>
      <h2>Hello</h2>
    </ArticleWrapper>
  )
}

export default BuildingMyOwnBlog
