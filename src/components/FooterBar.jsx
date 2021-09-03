import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import { IoLogoLinkedin, IoLogoTwitter, IoMail } from "react-icons/io5"

import { A } from "./text"

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding-bottom: 1rem;
  padding-top: 1rem;

  background-color: ${(props) => props.theme.primary};
`

Footer.Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  height: 100%;
  min-height: 1rem;
  width: 90%;
  max-width: 800px;

  /* padding-top: 1rem; */
  /* padding-bottom: 1.25rem; */
`

Footer.Socials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;

  height: 100%;

  & > * {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`

Footer.SocialLink = styled(A)`
  display: flex;
  align-items: center;
`

Footer.Mail = styled(IoMail).attrs((props) => ({
  size: "1.2em",
}))`
  color: ${(props) => props.theme.text.light};
`

Footer.LinkedIn = styled(IoLogoLinkedin).attrs((props) => ({
  size: "1.2em",
}))`
  color: ${(props) => props.theme.text.light};
`

Footer.Twitter = styled(IoLogoTwitter).attrs((props) => ({
  size: "1.2em",
}))`
  color: ${(props) => props.theme.text.light};
`

Footer.LinkRoll = styled.div`
  display: flex;
  flex-direction: column;
`

Footer.LinkHeader = styled(Link)`
  color: ${(props) => props.theme.text.light};
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
`

Footer.Link = styled(Link)`
  color: ${(props) => props.theme.text.light};
  font-size: 0.8rem;
  text-decoration: none;
`

Footer.Text = styled.div`
  color: ${(props) => props.theme.text.light};
  font-size: 0.8rem;
`

// const

const FooterBar = ({ lastUpdated }) => {
  return (
    <React.Fragment>
      <Footer>
        <Footer.Content>
          <Footer.Text>Copyright &copy; Jason Webster 2021</Footer.Text>
          <Footer.Socials>
            <Footer.SocialLink href="mailto:jason@kandua.com">
              <Footer.Mail />
            </Footer.SocialLink>
            <Footer.SocialLink href="https://twitter.com/jasonrobwebster">
              <Footer.Twitter />
            </Footer.SocialLink>
            <Footer.SocialLink href="https://www.linkedin.com/in/jasonrobwebster/">
              <Footer.LinkedIn />
            </Footer.SocialLink>
          </Footer.Socials>
          {lastUpdated && (
            <Footer.Text>
              Last updated:{" "}
              {lastUpdated.toLocaleString("en-GB", {
                day: "numeric",
                year: "numeric",
                month: "long",
              })}
            </Footer.Text>
          )}
        </Footer.Content>
      </Footer>
    </React.Fragment>
  )
}
// Footer.propTypes = {
//   lastModified: PropTypes.datetime.isRequired,
// }

export default FooterBar
