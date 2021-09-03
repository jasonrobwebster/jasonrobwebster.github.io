import React from "react"

import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import { HyphenatedText } from "./text"

const Card = styled(Link)`
  display: block;
  position: relative;
  top: 0px;
  width: 12.5rem;
  height: 17.5rem;
  min-width: 12.5rem;
  min-height: 17.5rem;

  background-color: ${(props) => props.theme.light};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;

  text-decoration: none;

  transition: top 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover {
    top: -5px;
    box-shadow: 0px 9px 18px rgba(0, 0, 0, 0.2);
  }
`

Card.Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

Card.Image = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
`

Card.Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`

Card.Title = styled.div`
  display: flex;
  width: 100%;

  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.18;

  color: ${(props) => props.theme.text.color};

  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`

Card.Description = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 2.27rem;

  font-size: 0.9rem;
  line-height: 1em;

  color: ${(props) => props.theme.text.color};
  overflow: hidden;

  &:not(:last-child) {
  }
`

Card.Tag = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;

  font-size: 0.8rem;
  font-style: italic;

  color: ${(props) => props.theme.text.muted};
`

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

BlogCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
}

export default BlogCard
