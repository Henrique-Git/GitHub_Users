import styled from "styled-components";

export const Body = styled.section`
    color: white;
    font-family: sans-serif;
    min-height: 95vh;
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
    margin: 0.5em 0 0 0;

    @media(max-width: 1359px){
        font-size: 2em;
        width: 90%;
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
    
    @media(max-width: 1359px){
        margin-top: 2em;
    }
`;

export const UserData = styled.div`
    background: #292929;
    display: flex;
    justify-content: space-around;
    height: 100%;
    width: 90%;
    padding: 0.5em;
    margin: 1.2em;
    border: 0.2em solid white;
    border-radius: 1em;
`;

export const AvatarImage = styled.img`
    border-radius: 100%;
    width: 30%;
`;

export const DivData = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
`;

export const DataItem = styled.li`
    line-height: 2.5em;
    font-weight: bold;
    list-style: circle;
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
    font-weight: bold;
    margin: 3em 0 0 0;
`;
