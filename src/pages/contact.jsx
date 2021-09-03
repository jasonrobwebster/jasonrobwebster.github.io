import React from "react"

import { A, HyphenatedText } from "../components/text"

const Contact = () => {
  return (
    <React.Fragment>
      <PageWrapper lastUpdated={new Date(2021, 7, 24)}>
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
      </PageWrapper>
    </React.Fragment>
  )
}

export default Contact
