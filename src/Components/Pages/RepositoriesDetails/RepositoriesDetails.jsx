import React, {useContext ,useEffect, useState} from "react";
import { Context } from "../../../Contexts/Context";
import ReturnArrow from "../../ReturnArrow/ReturnArrow";
import { RepositoriesDetailsDiv, DataItem, Title, DetailsBox } from "./Styles";

function RepositoriesDetails(){
    //Declaração das constantes a serem utilizadas no componente Repositories_Details
    const {dados} = useContext(Context);
    const {reposName} = useContext(Context);
    const [details, setDetails] = useState('');

    //Efeito para carregamento dos detalhes assim que a página for carregada
    useEffect(() => {
        document.title = "GitHub Repository_Details"

        fetchAPI();
        
        //Função assíncrona responsável pela requisição à API de Detalhes de Repositórios do GithHub
        async function fetchAPI() {
          const res = await fetch(
            `https://api.github.com/repos/` + reposName 
          );
  
          const data = await res.json();
          setDetails(data);
        }
    });

    return(
        <RepositoriesDetailsDiv>
            <Title>DETALHES</Title>

            <DetailsBox>
                <DataItem>NOME: {details.name}</DataItem>
                <DataItem>DESCRIÇÃO: {details.description}</DataItem>
                <DataItem>ESTRELAS: {details.stargazers_count}</DataItem>
                <DataItem>LINGUAGENS UTILIZADAS: {details.language}</DataItem>
                <DataItem>LINK: <span onClick={() => window.location.replace(`https://github.com/${reposName}`)}>{details.url}</span></DataItem>
            </DetailsBox>

            <ReturnArrow returnLink={`/userRepositories/${dados.login}`} />
        </RepositoriesDetailsDiv>
    );
}

export default RepositoriesDetails;