import React from "react";
import { PageButtons } from "./Styles";

function Pagination({pages, setCurrentPage}){
    return(
        <div>
            {Array.from(Array(pages), (repo, index) => {
                return (
                    <PageButtons value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>
                        {index + 1}
                    </PageButtons>
                )
            })}
        </div>
    );
}

export default Pagination;