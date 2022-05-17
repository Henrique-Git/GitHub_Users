import styled from "styled-components";

export const PageButtons = styled.button`
    font-weight: bold;
    width: auto;
    padding: 0.2em 0.8em;
    margin: 1em 0 1.5em 0;
    border: 0.1em solid #292929;
    border-radius: 100%;
    cursor: pointer;

    :hover{
        background: #292929;
        color: #ffffff;
    }

    @media(max-width: 800px){
        font-size: 0.5em;
    }
`;