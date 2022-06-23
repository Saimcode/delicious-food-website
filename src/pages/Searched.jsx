import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import styled from 'styled-components'
import {Link} from 'react-router-dom';

function Searched() {
    const [searchedRecipes,
        setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearchedRecipes = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    }

    useEffect(() => {
      getSearchedRecipes(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchedRecipes.map((item) => {
                return (
                  <Link to={"/recipe/" + item.id}>
                    <Card key={item.id}>
                        <img src={item.image} alt={item.title}/>
                        <h4>{item.title}</h4>
                    </Card>
                    </Link>
                )
            }
            )}
        </Grid>
    )
}

const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  margin: 2rem 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
  padding: 0 2rem;
`;

const Card = styled.div`
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
  `;


export default Searched