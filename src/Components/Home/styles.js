import styled from "styled-components";

export const Body = styled.section`
    background: black;
    color: white;
    font-family: sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width: 1359px){
        line-height: 4em;
    }
`;

export const Title = styled.h1`
    font-size: 2.3em;
    font-weight: bolder;
    text-align: center;

    @media(max-width: 1359px){
        font-size: 2em;
        width: 90%;
    }
`;

export const SubTitle = styled.p`
    font-size: 1.3em;
    line-height: 2em;
    width: 80%;
    text-align: center;

    @media(max-width: 1359px){
        margin-top: 2em;
        font-size: 1em;
    }

    @media(min-width: 300px) and (max-width: 900px){
        text-align: justify;
    }
`;

export const Input = styled.input`
    width: 40vw;
    text-align: center;
    padding: 0.4em;
    margin: 1em;
    border: none;
    border-radius: 0.5em;
    font-size: 1em;
    font-weight: bold;
`;

export const Button = styled.button`
    cursor: pointer;
    width: 15vw;
    padding: 0.8em;
    font-weight: bold;
    font-size: 1em;
    border-radius: 1.5em;
    border: none;
    color: black;
    transition: 0.8s ease;

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

    @media(max-width: 1359px){
        margin-top: 2em;
    }
`;

export const UserData = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
    padding: 0.5em;
    margin: 1.5em;
    border: 0.2em solid white;
    border-radius: 1em;
`;

export const DivData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
`;

export const DataItem = styled.p`
    line-height: 2.5em;
    font-weight: bold;
`;

export const AvatarImage = styled.img`
    width: 30%;
`;

export const ReposButton = styled.button`
    padding: 0.4em;
    border: none;
    border-radius: 0.5em;
    font-size: 1em;
    font-weight: bold;
    width: 100%;
    margin: 1em 0;
    cursor: pointer;
`;

export const NoInformation = styled.p`
    font-size: 1.3em;
    line-height: 5em;
`;
