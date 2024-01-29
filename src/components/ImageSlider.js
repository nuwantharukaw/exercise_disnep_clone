import React from 'react'
import Styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true
    };
    return (
        <Coursel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg"/>
            </Wrap>
        </Coursel>
        );
}

export default ImageSlider

const Coursel=Styled(Slider)`
    padding-top:20px;
    .slick-list{
        overflow:visible;
    }
    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150, 158, 171);
        }
    }
    li.slick-active button::before{
        color:white;
    }
    button{
        z-index:1;
    }
    
`
const Wrap=Styled.div`
    cursor:pointer;
    img{
        width:100%;
        height:100%;
        border-radius:5px;
        border:4px solid transparent;
        box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration:300ms;

        &:hover {
            border:4px solid rgba(249, 249, 249, 0.8);
        }
    }
`