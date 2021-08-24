import React from "react"

import { FooterBar } from "../components"
import { PageContent } from "../shared/styles"
import { A, HyphenatedText } from "../components/text"

const Contact = () => {
  return (
    <React.Fragment>
      <PageContent>
        <HyphenatedText>
          <p>
            You can contact me at my work email via{" "}
            <A href="mailto:jason@kandua.com">jason@kandua.com</A>.
          </p>
          <p>
            Alternatively, I am also on{" "}
            <A href="https://twitter.com/jasonrobwebster">Twitter</A>
          </p>
        </HyphenatedText>
      </PageContent>
      <FooterBar lastUpdated={new Date(2021, 7, 24)} />
    </React.Fragment>
  )
}

export default Contact
