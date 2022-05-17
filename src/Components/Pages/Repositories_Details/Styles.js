import styled from "styled-components";

export const RepositoriesDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    min-height: 95vh;
`;

export const Title = styled.h1`
    font-size: 1.8em;
    font-weight: bolder;
    margin: 1em 0 1em 0;

    @media(max-width: 500px){
        font-size: 1em;
    }

    @media(min-width: 501px) and (max-width: 800px){
        font-size: 1.2em;
    }

    @media(min-width: 801px) and (max-width: 1100px){
        font-size: 1.5em;
    }
`;

export const DetailsBox = styled.ul`
    background: #292929;
    font-size: 1.3em;
    text-align: justify;
    padding: 2em;
    margin-bottom: 1em;
    max-width: 70%;
    border: 0.1em solid #ffffff;
    border-radius: 1em;

    @media(max-width: 500px){
        font-size: 0.5em;
        text-align: left;
        width: 80%;
    }

    @media(min-width: 501px) and (max-width: 800px){
        font-size: 0.8em;
        text-align: left;
        width: 80%;
    }

    @media(min-width: 801px) and (max-width: 1100px){
        font-size: 1.1em;
        width: 80%;
    }
`;

export const DataItem = styled.li`
    font-weight: bold;
    line-height: 3em;
    list-style: circle;

    span{
        cursor: pointer;

        :hover{
            color: #ffff40;
            text-decoration: underline;
        }
    }
`;