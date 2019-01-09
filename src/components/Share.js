import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import styled from 'styled-components'

const ShareContainer = styled.div`
  display: flex;
  margin: 3rem auto;
  max-width: 250px;
  justify-content: space-around;
  align-items: center;
`

const ShareButtons = ({ url, title }) => (
  <ShareContainer>
    <span>SHARE:</span>
    <FacebookShareButton url={url}>
      <FacebookIcon className="share-icon" size={32} round />
    </FacebookShareButton>
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon className="share-icon" size={32} round />
    </TwitterShareButton>
    <TelegramShareButton url={url}>
      <TelegramIcon className="share-icon" size={32} round />
    </TelegramShareButton>
    <LinkedinShareButton url={url} title={title}>
      <LinkedinIcon className="share-icon" size={32} round />
    </LinkedinShareButton>
    <RedditShareButton url={url} title={title}>
      <RedditIcon className="share-icon" size={32} round />
    </RedditShareButton>
  </ShareContainer>
)

export default ShareButtons
