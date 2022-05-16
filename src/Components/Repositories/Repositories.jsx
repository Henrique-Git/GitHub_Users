import React, {useContext, useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa"
import Pagination from "../Pagination/Pagination";
import { RepositoriesDiv, TableTitle, Table, TableRow, LinkGit, DetailsButton} from "./Styles";
import { Context } from "../../Contexts/Context";
import ReturnArrow from "../ReturnArrow/ReturnArrow";

function Repositories() {
    const {dados} = useContext(Context);
    const {repos, setRepos} = useContext(Context);
    const {setReposName} = useContext(Context);
    const [reposPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(repos.length / reposPerPage);
    const startIndex = currentPage * reposPerPage;
    const endIndex = startIndex + reposPerPage;
    const sortedArray = repos.sort(sortRepositoriesStarsDescendant)
    const currentRepos = sortedArray.slice(startIndex, endIndex);

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

    function sortRepositoriesStarsDescendant(elementA, elementB){
      return elementB.stargazers_count - elementA.stargazers_count 
    }

    function sortRepositoriesStarsAscendant(elementA, elementB){
      return elementA.stargazers_count - elementB.stargazers_count
    }
    
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