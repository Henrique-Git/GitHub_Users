import styled from "styled-components";

export const ReturnButton = styled.button`
    background: transparent;
    font-size: 1.8em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    margin-bottom: 0.5em;
    border: none;
    cursor: pointer;

    :hover{
        color: #ffff40;
    }

    @media(max-width: 800px){
        font-size: 1.3em;
    }
`;