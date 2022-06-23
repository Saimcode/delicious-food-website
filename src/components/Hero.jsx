import React from 'react'
import styled from 'styled-components'
import Search from './Search'

function Hero() {
  return (
    <HeroContainer>
        <h1>Find your favorite recipe!</h1>
        <SearchContainer>
            <Search />
        </SearchContainer>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    background-image: url("https://thumbs.dreamstime.com/b/abstract-orange-watercolor-splashing-background-abstract-orange-watercolor-splashing-background-color-shades-hand-pained-149073669.jpg");
    background-size: 650px;
    background-position: center;
    background-repeat: no-repeat;

    h1 {
        font-family: 'Lobster Two', sans-serif;
        font-size: 3.5rem;
        font-weight: var(--font-semi-bold);
        letter-spacing: 0.13rem;
        text-align: center;
        color: #fff;
        text-shadow: 0 0 10px #fff, 0 0 20px #e9b83c, 0 0 30px #e9b83c, 0 0 40px #e9b83c, 0 0 50px #e9b83c, 0 0 60px #e9b83c, 0 0 70px #e9b83c;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }
    }
    @media (max-width: 480px) {
        height: 50vh;
        background-size: 400px;

        h1 {
            font-size: 2rem;
        }
    }
`

const SearchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 2rem;

input {
    border: none;
    border-radius: 2rem;
    padding: 1.3rem 3.2rem;
    background: var(--first-color-light);
    font-size: 1.3rem;
    color: #fff;
    outline: none;
    width: 400px;
    transition: 0.3s ease-in-out;
}

input:focus {
    padding: 1.3rem 3.2rem;
    background: var(--first-color-light);
    color: #fff;
    width: 400px;
    font-size: 1.3rem; 
    transition: 0.3s ease-in-out;
}

input:placeholder {
    color: #fff !important;
}

svg {
    position: relative;
    left: 2.7rem;
    top: 0.3rem;
    color: #fff;
    font-size: 1.5rem;
}

    @media (max-width: 768px) {
        overflow: hidden;
        visibility: hidden;

        input {
            padding: 0rem 0rem;
            font-size: 0rem;
            width: 0px;
        }
        input:focus {
            padding: 0rem 0rem;
            font-size: 0rem;
            width: 0px;
        }
        svg {
            visibility: hidden;
            font-size: 0rem;
        }
    }
    @media (max-width: 480px) {

    }
`

export default Hero