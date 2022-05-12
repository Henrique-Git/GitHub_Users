import styled from "styled-components";

export const DivData = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const Title = styled.h1`
    font-size: 1.8em;
    font-weight: bolder;
    color: white;
    line-height: 2em;
`;

export const DetailsBox = styled.div`
    border: 0.1em solid white;
    border-radius: 1em;
    padding: 3em;
    font-size: 1.3em;
`;

export const DataItem = styled.p`
    line-height: 3em;
    font-weight: bold;
    color: white;
`;