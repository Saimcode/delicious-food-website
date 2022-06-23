import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link, useParams} from 'react-router-dom';
import {motion} from 'framer-motion';

function Cuisine() {

    const [cuisine,
        setCuisine] = useState([]);
    let params = useParams();

    // Fetching the recipes from the API
    const getCuisine = async(name) => {

            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`);
            const recipes = await data.json();
            setCuisine(recipes.results);

    }

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);
    
    return (
      <Grid
        animate={{  opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
            {cuisine.map((item) => {
              return (
                <Card key={item.id}>
                          <Link to={`/recipe/${item.id}`}>
                            <img src={item.image} alt={item.title}/>
                          </Link>
                            <h4>{item.title}</h4>
                        </Card>
                )
            })}
        </Grid>
    )
  }

const Grid = styled(motion.div) `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  margin: 2rem 0;
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
  padding: 0 2rem;
`;

const Card = styled.div `

  img {
    width: 100%;
    border-radius: 2rem;
    
  }
  a {
    text-decoration: none;
  }
  h4 {
    font-family: 'Source Serif Pro';
    text-align: center;
    padding: 1rem;
    font-size: 1.3rem;
    color: var(--text-color-dark);
    font-weight: var(--font-semi-bold);
  }
  p {
    color: var(--text-color-dark);
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem;
  }
  `;

export default Cuisine