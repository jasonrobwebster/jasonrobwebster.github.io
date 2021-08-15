import React from "react"

import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;

  background-color: ${(props) => props.theme.primary};
`

Footer.Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 90%;
  max-width: 800px;

  /* padding-top: 1rem; */
  /* padding-bottom: 1.25rem; */
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
