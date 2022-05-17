import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Context } from "../../../Contexts/Context";
import Pagination from "../Pagination/Pagination";
import ReturnArrow from "../../ReturnArrow/ReturnArrow";
import { RepositoriesDiv, TableTitle, Table, TableRow, LinkGit, DetailsButton} from "./Styles";

function Repositories() {
    //Declaração das constantes a serem utilizadas no componente Repositories
    const {dados} = useContext(Context);
    const {repos, setRepos} = useContext(Context);
    const {setReposName} = useContext(Context);
    const [reposPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);

    //Cálculos para a paginação dos repositórios
    const pages = Math.ceil(repos.length / reposPerPage);
    const startIndex = currentPage * reposPerPage;
    const endIndex = startIndex + reposPerPage;
    const sortedArray = repos.sort(sortRepositoriesStarsDescendant)
    const currentRepos = sortedArray.slice(startIndex, endIndex);

    //Efeito para carregamento dos repositórios assim que a página for carregada
    useEffect(() => {
      document.title = "GitHub Repositories";

      fetchAPI();

      //Função assíncrona responsável pela requisição à API dos repositórios do GitHub
      async function fetchAPI() {
        const res = await fetch(
          `https://api.github.com/users/` + dados.login + `/repos`
        );

        const data = await res.json();
        setRepos(data);
      }
    },[]);

    //Função de ordenação do Array obtido como resposta, pelo número de estrelas
    function sortRepositoriesStarsDescendant(elementA, elementB){
      return elementB.stargazers_count - elementA.stargazers_count 
    }
    
    //Função responsável por fazer a listagem dos repositórios em formato de uma tabela
    function ListRepositories(element){
      return(
        <TableRow>
            <td>{element.name}</td>
            <td>{element.stargazers_count}</td>
            <td>
              <LinkGit onClick={() => window.location.replace(`https://github.com/${element.full_name}`)}>
                https://github.com/{element.full_name}
              </LinkGit>
            </td>
            <td>
              <Link to={`/userRepositories/${dados.login}/${element.name}`}>            
                <DetailsButton onClick={() => setReposName(element.full_name)}>Detalhes</DetailsButton>
              </Link>
            </td>
        </TableRow>
      )
    }
    
    if (!repos) return <div />;

    return (
      <RepositoriesDiv>
          <TableTitle>REPOSITÓRIOS DE {dados.login.toUpperCase()}</TableTitle>

          <Table>
            <TableRow>
              <th>Nome</th>
              <th><FaStar /></th>
              <th>GitHub</th>
              <th></th>
            </TableRow>

            {currentRepos.map(ListRepositories)}
          </Table>
        
          <Pagination pages={pages} setCurrentPage={setCurrentPage} />

          <ReturnArrow returnLink={`/`} />
      </RepositoriesDiv>
    );
}

  export default Repositories;