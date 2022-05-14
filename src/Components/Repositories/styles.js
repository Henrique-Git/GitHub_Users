import styled from "styled-components";

export const CompleteDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: black;
    color: white;
    text-align: center;    
    line-height: 1.5em;
    font-family: sans-serif;
    min-height: 100vh;

    @media(max-width: 1359px){
        height: 180vh;
    }
`;

export const TableTitle = styled.h1`
    font-size: 1.3em;
    margin: 1.8em 0;
`;

export const DataDiv = styled.div`
    display: flex;
    justify-content: center;
    border: 0.1em solid white;
    padding: 0.6em 4em;
`;

export const LinkGit = styled.p`
    cursor: pointer;
`;

export const ButtonDetails = styled.button`
    cursor: pointer;
    padding: 0.14em;
`;