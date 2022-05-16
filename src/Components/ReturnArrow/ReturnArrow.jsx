import React from "react";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { ReturnButton } from "./Styles";

function ReturnArrow(props) {
    return(
        <Link to={props.returnLink}>
            <ReturnButton>
              <GiReturnArrow />
            </ReturnButton>
        </Link>
    )
}

export default ReturnArrow;