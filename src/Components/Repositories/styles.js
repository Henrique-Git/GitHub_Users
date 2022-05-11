import styled from "styled-components";

export const CompleteDiv = styled.div`
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

export const Input = styled.div`
    padding: 1.1em;
    height: 6vh;
    display: flex;
    justify-content: center;

    @media(min-width: 300px) and (max-width: 900px){
        height: 4vh;
    }

    input{
        width: 40%;
        padding: 0.2em;
        border: none;
        border-radius: 0.7em 0 0 0.7em;
        letter-spacing: 0.3em;
        text-align: center;
        font-size: 1.1em;
        font-weight: bold;
        background: lightgray;
    }

    input:focus-visible{
        outline: none;
    }

    @media(min-width: 300px) and (max-width: 900px){
        input{
            width: 80%;
            font-size: 0.9em;
            text-align: start;
        }
    }


    button{
        background: linear-gradient(45deg, #FE0002, #A1015D, #63009E, #2A00D5);
        background-size: 400% 400%;
        animation: gradient 4s ease infinite;
        cursor: pointer;
        width: 4%;
        font-size: 1.15em;
        font-weight: bolder;
        text-align: center;
        padding: 0.6em 0.6em 0.4em 0.4em;
        border: none;
        border-left: 1px solid black;
        border-radius: 0 0.6em 0.6em 0;
        color: white;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @media(min-width: 300px) and (max-width: 900px){
        button{
            width: 12%;
            font-size: 0.9em;
        }
    }
`;

export const DataDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1359px){
        flex-direction: column;
    }
`;

export const ImageDiv = styled.div`
    text-align: center;
    width: 100vw;
    max-width: 50vw;

    @media(max-width: 1359px){
        margin: 2em 0 4em 0;
    }

    @media(min-width: 300px) and (max-width: 900px){
        max-width: 80vw;
        text-align: center;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 80vh;
    margin: 1.5em 1.5em 1.5em 3em;
    border-radius: 1.5em;
    box-shadow: 0.5em 1em 4em gray;

    @media(max-width: 1359px){
        width: 100%;
        height: 70vh;
        margin: 0;
    }

    @media(min-width: 300px) and (max-width: 599px){
        width: 100%;
        height: 50vh;
        margin: 0;
    }

    @media(min-width: 600px) and (max-width: 900){
        height: 70vh;
    }
`;

export const IFrame = styled.iframe`
    width: 100%;
    height: 80vh;
    margin: 1.5em 1.5em 1.5em 3em;
    border-radius: 1.5em;
    box-shadow: 0.5em 1em 4em gray;

    @media(max-width: 1359px){
        height: 70vh;
        margin: 0;
    }
    
    @media(min-width: 300px) and (max-width: 900px){
        width: 100%;
        height: 50vh;
        margin: 0;
    }

    @media(min-width: 600px) and (max-width: 900){
        height: 70vh;
    }

`;

export const ExplanationDiv = styled.div`
    width: 100%;
    max-width: 50vw;
    text-align: justify;
    padding: 3em 3em 3em 5em;
    color: white;

    @media(max-width: 1359px){
        max-width: 70vw;
        padding: 0;
    }

    @media(min-width: 300px) and (max-width: 900px){
        max-width: 90vw;
        padding: 0;
    }
`;

export const ExplanationTitle = styled.h1`
    text-align: center;
    font-size: 1.8em;
    font-weight: bolder;
    margin-bottom: 1em;

    @media(min-width: 300px) and (max-width: 900px){
        font-size: 1.6em;
    }
`;

export const ExplanationDate = styled.p`
    text-align: center;
    font-size: 1.2em;
    font-weight: bolder;
    margin-bottom: 2em;

    @media(max-width: 1359px){
        font-size: 1.1em;
    }
`;

