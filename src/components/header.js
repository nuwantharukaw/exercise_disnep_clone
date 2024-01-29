import React from 'react'
import Styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo  src="/images/logo.svg"/>
        <NavMenu>
            <a href="#">
                <img src="images/home-icon.svg"/>
                <span>Home</span>
            </a>
            <a href="#">
                <img src="images/search-icon.svg"/>
                <span>Search</span>
            </a>
            <a href="#">
                <img src="images/watchlist-icon.svg"/>
                <span>Watch List</span>
            </a>
            <a href="#">
                <img src="images/original-icon.svg"/>
                <span>Originals</span>
            </a>
            <a href="#">
                <img src="images/movie-icon.svg"/>
                <span>Movies</span>
            </a>
            <a href="#">
                <img src="images/series-icon.svg"/>
                <span>Series</span>
            </a>
        </NavMenu>
        <UserImg src="images/user.jpeg"/> 
    </Nav>
  )
}

export default Header

const Nav=Styled.div`
    height:70px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
`
const Logo=Styled.img`
    width:80px;
`
const NavMenu=Styled.div`
    display:flex;
    flex:1;
    margin-left:20px;
    align-items:center;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        img{
            height:20px;
        }
        span{
            font-weight:600;
            font-size:15px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                transform-origin:left center;
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform:scaleX(0);
            }
        }
    &:hover{
        span:after{
            transform:scaleX(1);
            
        }
    }
    }
`
const UserImg=Styled.img`
    height:40px;
    width:40px;
    border-radius:50%;
`