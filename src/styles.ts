import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    list-style: none;

  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => (props.theme as Theme).corDeFundo};
    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 150px auto;
  column-gap: 56px;
  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

  a {
    color: aliceblue;
    text-decoration: none;

    :hover {
      color: #5f27cd;
    }
  }

  button {
    background-color: ${(props) => props.theme.corPrincipal};
    border: 1px solid ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corDeFundo};
    border-radius: 12px;
    padding: 8px 16px;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.corSecundaria};
      color: ${(props) => props.theme.corTextoSecundario};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${(props) => props.theme.corFoco};
    }
  }
`
