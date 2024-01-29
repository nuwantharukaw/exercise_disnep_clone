import React from 'react'
import Styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"/>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container=Styled.div`
`
const Content=Styled.div`
    display:grid;
    grid-gap:15px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap=Styled.div`
    cursor:pointer;
    border:3px solid rgba(249, 249, 249, 0.1);
    border-radius:10px;
    overflow:hidden;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    &:hover{
        border:3px solid rgba(249, 249, 249, 0.8);
        transform:scale(1.05);
    }
`