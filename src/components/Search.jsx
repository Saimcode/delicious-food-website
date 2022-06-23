import {React, useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + search);
    };

    return (
        <SearchBar>
            <form onSubmit={submitHandler}>
                <FaSearch/>
                <input onChange={(e) => setSearch(e.target.value)} type="text" value={search} placeholder="Search..."/>
            </form>
        </SearchBar>
    )
}

const SearchBar = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;

    input {
        border: none;
        border-radius: 2rem;
        padding: 0.8rem 1.5rem 0.8rem 1.5rem;
        background: #eaeaea;
        font-size: 1.05rem;
        color: var(--text-color-dark);
        outline: none;
        width: 20px;
        transition: 0.3s ease-in-out;
    }

    input:focus {
        background: var(--first-color-light);
        padding: 0.8rem 1.5rem 0.8rem 2.5rem;
        width: 200px;
        transition: 0.3s ease-in-out;
    }

    input:placeholder {
        color: #fff;
    }

    svg {
        position: relative;
        left: 2rem;
        top: 0.17rem;
        color: #fff;
        font-size: 1.1rem;
    }

    @media (max-width: 1024px) {
        input:focus {
            width: 172px;
            padding: 0.8rem 1.5rem 0.8rem 2.5rem;
        }
    }

    @media (max-width: 768px) {
        input {
            width: 250px;
            padding: 0.8rem 1.5rem 0.8rem 2.5rem;
        }
    
        input:focus {
            width: 250px;
            padding: 0.8rem 1.5rem 0.8rem 2.5rem;
        }
    }
    @media (max-width: 320px) {
        svg {
            color: #fff;
            font-size: 1.05rem;
            left: 1rem;
            top: 2.3rem;
        }
    }
`;

export default Search