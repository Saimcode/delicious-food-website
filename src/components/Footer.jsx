import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    
    <FooterContainer>
          <p>&copy; 2022 <a target="_blank" href='https://saimcode.vercel.app'>Saimcode</a> All Rights Reserved.</p>
      <SocialLinks>
            <a target="_blank" href="https://www.linkedin.com/in/saim-qureshi-703060234/">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/Saimcode/">
              <FaGithub />
            </a>
      </SocialLinks>
    </FooterContainer>

  )
}

const FooterContainer = styled.footer`
  background-color: transparent;
  padding: 2rem 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: var(--font-semi-bold);
  color: var(--text-color-light);

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    color: var(--text-color-dark);
    text-decoration: none;
    font-weight: var(--font-bold);
  }
  a:hover {
    // border-bottom: 2.4px solid var(--first-color);
    color: var(--first-color);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 2rem 0; 
  }
`

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    svg {
      font-size: 1.5rem;
    }

    a {
      color: var(--text-color);
      text-decoration: none;

      &:hover {
      color: var(--first-color);
      }
    }

`

export default Footer