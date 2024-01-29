import React from 'react'
import Styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://w0.peakpx.com/wallpaper/480/749/HD-wallpaper-pixar-fun-adventure-film-luca.jpg"/>
      </Background>
      <ImageTitle>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/CARTOON_NETWORK_logo.png"/>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png"/><spam>Play</spam>
        </PlayButton>
        <TrailorButton>
          <img src="/images/play-icon-white.png"/><span>Trailer</span>
        </TrailorButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
        <img src="/images/group-icon.png"/>
        </GroupWatchButton>
      </Controls>
      <SubTitile>
        2018 - 7m - Family, Fantasy, Kids, Animation
      </SubTitile>
      <Description>
      Bao is a 2018 American computer-animated short film written and directed by Domee Shi and produced by Pixar Animation Studios. It is the first Pixar short film to be directed by a female director.It was screened at the Tribeca Film Festival before being released with Incredibles 2 on June 15, 2018. The film is about an aging and lonely Chinese Canadian mother suffering from empty nest syndrome, who receives an unexpected second chance at motherhood when she makes a steamed bunthat comes to life. The film won the Academy Award for Best Animated Short Film at the 91st Academy Awards.
      </Description>
    </Container>
  )
}

export default Detail

const Container=Styled.div`
  min-height:calc(100vh - 70px);
  padding:0 calc(3.5vw + 5px);
  position:relative;
`
const Background=Styled.div`
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:-1;
  opacity:0.8;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
`
const ImageTitle=Styled.div`
  height:35vh;
  width:20vw;
  min-height:330px;
  min-width:330px;
  img{
    width:100%;
    height:100%;
    object-fit:contain;
  }
`
const Controls=Styled.div`
  display:flex;
  align-items:center;
`
const PlayButton=Styled.div`
  cursor:pointer;
  margin-right:15px;
  border-radius:5px;
  font-size:12px;
  color:black;
  background-color:rgb(249, 249, 249);
  height:45px;
  padding:0px 10px;
  display:flex;
  align-items:center;
  letter-spacing:1.8px;
  text-transform:uppercase;

  &:hover{
    background:rgb(198,198,198);
  }
`
const TrailorButton=Styled(PlayButton)`
  background:rgba(0, 0, 0, 0.3);
  border:1px solid rgba(249,249,249);
  color:rgba(249, 249, 249);

  &:hover{
    background:rgb(198,198,198,0.3);
  }
`
const AddButton=Styled.div`
  margin-right:10px;
  cursor:pointer;
  width:44px;
  height:44px;
  background:rgba(0, 0, 0, 0.3);
  border:1px solid rgba(249,249,249);
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 0 1px 7px 0;
  border-radius:50%;
  span{
    font-size:35px;
    color:rgba(249, 249, 249);
  }
  &:hover{
    background:rgb(198,198,198,0.3);
  }
`
const GroupWatchButton=Styled(AddButton)`
  padding:0;
`
const SubTitile=Styled.div`
  color:rgba(230, 230, 230);
  font-weight:600;
  font-size:15px;
  min-height:28px;
  margin-top:10px;
`
const Description=Styled.div`
  line-height:1.2;
  font-size:20px;
`