import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FooterDiv, FooterText } from "./Styles";

function Footer(){
    return(
        <FooterDiv>
            <FooterText>Copyright <FaRegCopyright /> 2022 - Henrique Neves Medeiros</FooterText> 
        </FooterDiv>
    );
}

export default Footer;