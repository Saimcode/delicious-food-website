import {useEffect, useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';
import {FaLeaf} from 'react-icons/fa';

function Veggie() {

    const [veggie,
        setVeggie] = useState([]);

    useEffect(() => {
        getVeggie();
    }, []);

    // Fetching the recipes from the API
    const getVeggie = async() => {

        // Check if there is anything in the local storage
        const check = localStorage.getItem("veggie");
        if (check) {
            setVeggie(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);

        }
    }

    return (
        <div>
            <Wrapper>
                <h3><FaLeaf/>Our Vegetarian Picks</h3>
                <Splide
                    options={{
                    type: 'slide',
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '2rem',
                    breakpoints: {
                        768: {
                            perPage: 2,
                        },
                        480: {
                            perPage: 1,
                        },
                    }
                }}>

                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Link to={"/recipe/" + recipe.id}>
                                    <Card>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title}/>
                                    </Card>
                                </Link>
                                <Gradient/>
                            </SplideSlide>
                        );
                    })};

                </Splide>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.div `
  margin: 4rem 0;
  padding: 0 2rem;  

    h3 {    
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        svg {
            font-size: 1.5rem;
        }
    }
`;

const Card = styled.div `
  border-radius: 2rem;
  overflow: hidden;
  min-height: 15rem;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    color: #fff;
    width: 100%;
    height: 40%;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 1rem;
  }

  h3 {
    font-size: 1.5rem;
  }
`;

const Gradient = styled.div `
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
    z-index: 3;
    border-radius: 2rem;
    cursor: grab;
`;

export default Veggie