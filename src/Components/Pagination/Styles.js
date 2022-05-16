import styled from "styled-components";

export const PageButtons = styled.button`
    cursor: pointer;
    width: auto;
    font-weight: bold;
    margin: 1em 0 1.5em 0;
    padding: 0.2em 0.8em;
    border: 0.1em solid #292929;
    border-radius: 100%;

    :hover{
        background: #292929;
        color: #ffffff;
    }

    @media(max-width: 800px){
        font-size: 0.5em;
    }
`;