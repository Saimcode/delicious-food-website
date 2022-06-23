import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiForkKnifeSpoon} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {useState} from 'react';

function Category() {
  return (
    <List className='category-mobile'>
        <NavLink to={"/cuisine/Italian"} className="nav-link">
            <FaPizzaSlice />
            <h4 className="nav-title">Italian</h4>
        </NavLink>
        <NavLink to={"/cuisine/American"} className="nav-link">
            <FaHamburger />
            <h4 className="nav-title">American</h4>
        </NavLink>
        <NavLink to={"/cuisine/Thai"} className="nav-link">
            <GiNoodles />
            <h4 className="nav-title">Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/Indian"} className="nav-link">
            <GiForkKnifeSpoon />
            <h4 className="nav-title">Indian</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;

    .nav-link {
        font-size: var(--normal-font-size);
        font-weight: var(--font-medium);
        color: var(--text-color);
        margin: 0 var(--mb-1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 0.4rem;
        border-radius: 5px;
        transition: .2s;
        gap: 0.5rem;
    
        &:hover {
            color: var(--first-color);
        }
    
        &:hover .nav-title {
            color: var(--first-color);
        }

        @media (max-width: 768px) {
            margin: 0;
        }

        @media (max-width: 425px) {
            padding: 0.2rem 0;
            gap: 0.5rem;
        }
        @media (max-width: 1024px) {
            padding: 0.2rem 0;
            margin: 0;
        }
    }
`

export default Category