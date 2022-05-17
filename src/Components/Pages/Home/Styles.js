import styled from "styled-components";

export const HomeDiv = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    min-height: 95vh;
  
    @media(min-width: 320px) and (max-width: 740px){
        line-height: 4em;
    }
`;

export const Title = styled.h1`
    font-size: 2.3em;
    font-weight: bolder;
    text-align: center;
    margin: 0.5em 0 0 0;

    @media(max-width: 1024px){
        font-size: 2em;
        width: 90%;
    }
`;

export const Input = styled.input`
    font-size: 1em;
    font-weight: bold;
    width: 40vw;
    text-align: center;
    padding: 0.4em;
    margin: 1em;
    border: none;
    border-radius: 0.5em;

    @media(min-width: 320px) and (max-width: 740px){
        width: 80vw;
    }
`;

export const Button = styled.button`
    font-size: 1em;
    font-weight: bold;
    color: #292929;
    width: 15vw;
    padding: 0.8em;
    border: none;
    border-radius: 1.5em;
    transition: 0.8s ease;
    cursor: pointer;
    
    @media(min-width: 320px) and (max-width: 740px){
        font-size: 0.8em;
        width: 30vw;
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

    @media(min-width: 320px) and (max-width: 1024px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media(min-width: 700px) and (max-width: 1024px){
        width: 70%;
    }
`;

export const AvatarImage = styled.img`
    width: 30%;
    border-radius: 100%;

    @media(min-width: 320px) and (max-width: 500px){
        width: 80%;
    }

    @media(min-width: 501px) and (max-width: 1024px){
        width: 50%;
    }
`;

export const DivData = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    width: 50%;

    @media(min-width: 320px) and (max-width: 500px){
        font-size: 0.8em;
        width: 90%;
    }

    @media(min-width: 501px) and (max-width: 700px){
        font-size: 1em;
        width: 90%;
    }

    @media(min-width: 701px) and (max-width: 1024px){
        font-size: 1.1em;
        width: 90%;
    }
`;

export const DataItem = styled.li`
    font-weight: bold;
    line-height: 2.5em;
    list-style: circle;
`;

export const ReposButton = styled.button`
    font-size: 1em;
    font-weight: bold;
    width: 100%;
    padding: 0.4em;
    margin: 1em 0;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
`;

export const NoInformation = styled.p`
    font-size: 1.3em;
    font-weight: bold;
    margin: 3em 0 0 0;

    @media(min-width: 320px) and (max-width: 740px){
        font-size: 1em;
    }
`;
