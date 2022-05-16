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
`;

export const DetailsBox = styled.ul`
    border: 0.1em solid white;
    border-radius: 1em;
    padding: 2em;
    margin-bottom: 1em;
    font-size: 1.3em;
    max-width: 70%;
    text-align: justify;
    background: #292929;
`;

export const DataItem = styled.li`
    line-height: 3em;
    font-weight: bold;
    list-style: circle;

    span{
        cursor: pointer;

        :hover{
            color: #ffff40;
            text-decoration: underline;
        }
    }
`;