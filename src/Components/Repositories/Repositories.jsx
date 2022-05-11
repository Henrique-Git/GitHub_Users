import React, {useContext, useEffect, useState} from "react";
import { CompleteDiv, DataDiv, ExplanationDate, ExplanationDiv, ExplanationTitle, IFrame, Image, ImageDiv, Input } from "./styles";
import { Context } from "../../Contexts/Context";

function Repositories() {
    const {dados} = useContext(Context);
    const [repos, setRepos] = useState(null);

    useEffect(() => {

      fetchAPI();

      async function fetchAPI() {
        const res = await fetch(
          `https://api.github.com/users/` + dados.login + `/repos`
        );

        const data = await res.json();
        setRepos(data);
      }
    },[]);
    
    function ListRepositories(element){
      return(
        <div>
          {element.name}
          {element.stargazers_count}
        </div>
      );
    }


    /*async function searchDateEnter(e){
      if(e.keyCode === 13){
        const dateSearched = await inputField;

        fetchAPI();

        async function fetchAPI() {
          const res = await fetch(
              // we'll update the KEYHERE soon!
              `https://api.nasa.gov/planetary/apod?api_key=FRUjXMxXvv7HpTI5fw0o3sQfm3N9qUy5WKMLXRbd&date=`+ dateSearched
          );

          const data = await res.json();
          setDados(data);
        }
      }
    }*/
    if (!repos) return <div />;

    return (
      <CompleteDiv>
        <DataDiv>
            {console.log(repos)}
            {repos.map(ListRepositories)}
        </DataDiv>
        
      </CompleteDiv>
    );
  }

  export default Repositories;