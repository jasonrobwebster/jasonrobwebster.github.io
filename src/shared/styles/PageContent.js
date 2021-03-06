import styled from "styled-components"

const PageContent = styled.div.attrs((props) => ({
  maxWidth: props.maxWidth || "630px",
}))`
  width: 90%;
  max-width: ${(props) => props.maxWidth};
  min-height: calc(100vh - 3rem); // view height - navbarHeight
  margin-left: auto;
  margin-right: auto;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`
export default PageContent
