import React, {useContext, useEffect} from "react";
import { Link } from 'react-router-dom';
import { ButtonDetails, CompleteDiv, DataDiv, TableTitle } from "./styles";
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
    
    function ListRepositoriesName(element){
      return(
        <DataDiv>
            <p>{element.name}</p>
        </DataDiv>
      );
    }

    function ListRepositoriesStars(element){
      return(
        <DataDiv>
            <p>{element.stargazers_count}</p>
        </DataDiv>
      );
    }

    function ListRepositoriesDetails(element){
      return(
        <DataDiv>
            <Link to={`/userRepositories/${dados.login}/${element.name}`}>            
            <ButtonDetails onClick={() => setReposName(element.full_name)}>Detalhes</ButtonDetails>
            </Link>
        </DataDiv>
      );
    }
    
    if (!repos) return <div />;

    return (
      <CompleteDiv>
          <TableTitle>REPOSITÓRIOS</TableTitle>

          <table>
            <tr>
              <th>Nome</th>
              <th>Estrelas</th>
              <th></th>
            </tr>

            <tr>
              <td>{repos.map(ListRepositoriesName)}</td>
              <td>{repos.map(ListRepositoriesStars)}</td>
              <td>{repos.map(ListRepositoriesDetails)}</td>
            </tr>
          </table>
      </CompleteDiv>
    );
  }

  export default Repositories;