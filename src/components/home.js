import React from 'react'
import Styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
function Home() {
  return (
    <Container>
      <ImageSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home

const Container=Styled.div`
    min-height:calc(100vh - 10px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;

    &:before{
      content:"";
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index:-1;
      background:url("/images/home-background.png") center center / cover no-repeat fixed;
    }
`