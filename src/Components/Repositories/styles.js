import styled from "styled-components";

export const RepositoriesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    text-align: center;    
    font-family: sans-serif;
    min-height: 95vh;
`;

export const TableTitle = styled.h1`
    font-size: 1.8em;
    font-weight: bolder;
    text-align: center;
    margin: 1em 0 1.5em 0;

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

export const Table = styled.table`
    font-weight: bold;

    @media(max-width: 500px){
        width: 90%;
        font-size: 0.3em;
    }

    @media(min-width: 501px) and (max-width: 800px){
        width: 80%;
        font-size: 0.5em;
    }

    @media(min-width: 801px) and (max-width: 1100px){
        width: 80%;
        font-size: 0.9em;
    }
`;

export const TableRow = styled.tr`
    th{
        padding-bottom: 0.5em;
        font-size: 1.1em;
    }

    td{
        justify-self: center;
        align-self: center;
        background: #292929;
        border: 0.1em solid #ffffff;
        padding: 0.7em 3em;
        text-align: justify;
    }
`;

export const LinkGit = styled.p`
    cursor: pointer;

    :hover{
        color: #ffff40;
        text-decoration: underline;
    }
`;

export const DetailsButton = styled.button`
    cursor: pointer;
    font-size: 0.9em;
    font-weight: bold;
    border: none;
    border-radius: 1em;
    padding: 0.3em 1em;

    :hover{
        background: #292929;
        color: #ffff40;
    }
`;