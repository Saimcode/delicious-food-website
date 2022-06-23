import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {FaDotCircle} from 'react-icons/fa';
import {motion} from 'framer-motion';

function Recipe() {

    let params = useParams();
    const [details,
        setDetails] = useState({});
    const [active,
        setActive] = useState("Instructions");

    const fetchDetails = async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();
        console.log(params.id);
    }, [params.id]);

    // Get dishTypes from details.dishTypes array. Else, display "Tasty Recipe"
    const dishTypes = details.dishTypes ? details.dishTypes.join(" ") : "Tasty Recipe";

    // Get the creditsText of details. Else, display "Unknown"
    const getCreditsText = details.creditsText ? details.creditsText : "Unknown";

    return (
        <Wrapper
        animate={{  opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
            <DetailsContainer>
                <h3 className='dishtypes'>{dishTypes}</h3>
                <h2>{details.title}</h2>
                <p>By {getCreditsText}</p>
            </DetailsContainer>
            <ImageContainer>
                <img src={details.image} alt={details.title}/>
            </ImageContainer>
            <Info>
                <ButtonContainer>
                    <Button
                        className={active === 'Instructions'
                        ? 'active'
                        : ''}
                        onClick={() => setActive('Instructions')}>Instructions</Button>
                    <Button
                        className={active === 'Ingredients'
                        ? 'active'
                        : ''}
                        onClick={() => setActive('Ingredients')}>Ingredients</Button>
                </ButtonContainer>

                {active === 'Instructions' && (
                    <div>
                        <InstructionsTitle>What is {details.title}?</InstructionsTitle>
                        <h3
                            dangerouslySetInnerHTML={{
                            __html: details.summary
                        }}></h3>

                        <InstructionsTitle>Step by Step Instructions</InstructionsTitle>
                        <h3
                            dangerouslySetInnerHTML={{
                            __html: details.instructions
                        }}></h3>
                    </div>
                )}

                {active === 'Ingredients' && (
                    <IngredientsStyle>
                        <h2>Here is the list of Ingredients</h2>
                        {details
                            .extendedIngredients
                            .map((ingredient) => (
                                <li key={ingredient.id}> 
                                <FaDotCircle />
                                {ingredient.original} </li>
                            ))}
                    </IngredientsStyle>
                )}

            </Info>
        </Wrapper>
    )
}


const Wrapper = styled(motion.div) `
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;

    .active {
        // color: #fff;
        // background: #ffc107 !important;
        color: var(--first-color);
        border-bottom: 4px solid var(--first-color);
    }

    h2 {
        font-family: 'Source Serif Pro';
        font-size: 2.7rem;
        text-align: center;
        margin: 0.5rem 0;
    }
    .dishtypes {
        text-transform: uppercase;
        font-size: 1rem;
        margin: 0.3rem 0 0 0;
        color: var(--first-color);
        font-weight: bold;
    }
    p {
        text-align: center;
        margin-bottom: 0;
        font-size: 1.5rem;
        padding: 0.5rem;
    }

    li {
        font-size: 1.2rem;
        margin: 0 0 0.8rem 0;
    }
    ul {
        margin-top: 2rem;
        line-height: 2.5rem;
    }
    p {
        font-size: 1rem;
        margin: 0;
    }
    img {
        width: 100%;
        height: auto;
        border-radius: 1.5rem;
    }

    @media (max-width: 1024px) {
        li {
            font-size: 1.1rem;
            margin: 0 0 0.5rem 0;
        }
    }
    @media (max-width: 768px) {
        padding: 0 2.5rem;
    }
    @media (max-width: 576px) {
        padding: 0 2rem;
        h2 {
            font-size: 2.2rem;
        }
        .active {
            border-bottom: 3px solid var(--first-color);
        }
        .dishtypes {
            font-size: 0.8rem;
        }
    }
    @media (max-width: 426px) {
        h2 {
            font-size: 1.8rem;
        }
    }
    @media (max-width: 375px) {
        padding: 0 1rem;
        .dishtypes {
            font-size: 0.6rem;
        }
    }
`;

const DetailsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div `
    width: 800px;
    height: auto;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

const IngredientsStyle = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0 !important;

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        svg {
            margin-right: 0.5rem;
            font-size: 1rem;
            color: var(--first-color);
        }
    }
    h2 {
        text-align: left;
        font-size: 1.5rem;
        font-weight: var(--font-semi-bold);
        color: var(--text-color-dark);
        margin: 1rem 0 0.5rem 0;
    }
    @media (max-width: 576px) {
        li {
            font-size: 1rem;
            line-height: 1.75rem;
        }
    }
`;

const Info = styled.div `
    padding: 0.5rem;
    @media (max-width: 375px) {
        padding: 0rem;
    }
`;

const InstructionsTitle = styled.h3 `
    font-family: 'Source Serif Pro';
    font-size: 1.5rem;
    font-weight: var(--font-semi-bold);
    color: var(--text-color-dark);
    margin: 1rem 0;
    text-align: center;

`;

const ButtonContainer = styled.div `
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
gap: 3rem;  
// padding: 1rem;
padding: 1rem 0 2rem 0;  

`;

const Button = styled.button `
// display: inline-block;
// padding: .75rem 1.25rem;
// border-radius: 0.5rem;
// color: #fff;
// font-size: 1rem;
// transition: all .2s;
// position: relative;
// overflow: hidden;
// border: none;
// cursor: pointer;
// background-color: var(--first-color-light);

// &:hover {
//   color: #fff;
//   background-color: #ffc107;
// }
    
    cursor: pointer;
    background: transparent;
    color: var(--text-color-light);
    font-size: 1.7rem;
    font-weight: var(--font-semi-bold);
    border: none;
    border-bottom: 4px solid var(--text-color-light);
    padding: 0 0 0.2rem 0;
    font-family: 'Nunito';
    @media (max-width: 992px) {
        font-size: 1.5rem;
    }
    @media (max-width: 576px) {
        font-size: 1.2rem;
        border-bottom: 3px solid var(--text-color-light);
    }
`;


export default Recipe