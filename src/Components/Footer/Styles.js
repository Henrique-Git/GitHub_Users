import styled from "styled-components";

export const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eeeeee;
    min-height: 5vh;
`;

export const FooterText = styled.p`
    font-size: 0.9em;

    @media(min-width: 320px) and (max-width: 740px){
        font-size: 0.7em;
    }
`;