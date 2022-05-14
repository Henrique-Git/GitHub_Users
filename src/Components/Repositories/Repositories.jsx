import React, {useContext, useEffect} from "react";
import { Link } from 'react-router-dom';
import { ButtonDetails, CompleteDiv, TableRow, LinkGit, TableTitle } from "./styles";
import { Context } from "../../Contexts/Context";

function Repositories() {
    const {dados} = useContext(Context);
    const {repos, setRepos} = useContext(Context);
    const {setReposName} = useContext(Context);

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

    function sortRepositoriesStars(elementA, elementB){
      return elementB.stargazers_count - elementA.stargazers_count 
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
                <ButtonDetails onClick={() => setReposName(element.full_name)}>Detalhes</ButtonDetails>
              </Link>
            </td>
        </TableRow>
      )
    }
    
    if (!repos) return <div />;

    repos.sort(sortRepositoriesStars)

    return (
      <CompleteDiv>
          <TableTitle>REPOSITÓRIOS</TableTitle>

          <table>
            <tr>
              <th>Nome</th>
              <th>Estrelas</th>
              <th>GitHub</th>
              <th></th>
            </tr>

            {repos.map(ListRepositories)}
          </table>
        

      </CompleteDiv>
    );
  }

  export default Repositories;