import styled from "styled-components";

export const RepositoriesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffffff;    
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
        font-size: 0.3em;
        width: 90%;
    }

    @media(min-width: 501px) and (max-width: 800px){
        font-size: 0.5em;
        width: 80%;
    }

    @media(min-width: 801px) and (max-width: 1100px){
        font-size: 0.9em;
        width: 80%;
    }
`;

export const TableRow = styled.tr`
    th{
        font-size: 1.1em;
        padding-bottom: 0.5em;
    }

    td{
        background: #292929;
        text-align: justify;
        padding: 0.7em 3em;
        border: 0.1em solid #ffffff;
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
    font-size: 0.9em;
    font-weight: bold;
    padding: 0.3em 1em;
    border: none;
    border-radius: 1em;
    cursor: pointer;

    :hover{
        background: #292929;
        color: #ffff40;
    }
`;