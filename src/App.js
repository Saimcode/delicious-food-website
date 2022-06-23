import { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import {GiKnifeFork} from 'react-icons/gi';
import {Link} from 'react-router-dom';
import Footer from "./components/Footer";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Nav>
                    <div className='logo'>
                        {/* <GiKnifeFork/> */}
                        <Logo to={"/"} className="logo-name">Delicious</Logo>
                    </div>
                    <Category />
                    <Search />
                </Nav>
                <Pages/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-style: italic;
    font-family: 'Lobster Two', sans-serif;
    transition: .2s;
    width: 200%;
    color: var(--text-color);
`;

const Nav = styled.div `
    padding 0.5rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    width: 100%;

    @media (max-width: 1024px) {
        gap: 1rem;
        padding: 2rem 0 0.5rem 0;
    }
    @media (max-width: 768px) {
        padding: 2rem 2rem 0.5rem 2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0rem;
    }

`;

export default App;
