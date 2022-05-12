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
    height: 100vh;

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

export const ButtonDetails = styled.button`
    padding: 0.184em;
`;