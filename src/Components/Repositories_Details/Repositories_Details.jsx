import React, {useContext ,useEffect, useState} from 'react';
import ReturnArrow from "../ReturnArrow/ReturnArrow";
import { RepositoriesDetailsDiv, DataItem, Title, DetailsBox } from './Styles'
import { Context } from '../../Contexts/Context';

function Repositories_Details(){
    const {dados} = useContext(Context);
    const {reposName} = useContext(Context);
    const [details, setDetails] = useState('');

    useEffect(() => {

        fetchAPI();
  
        async function fetchAPI() {
          const res = await fetch(
            `https://api.github.com/repos/` + reposName 
          );
  
          const data = await res.json();
          setDetails(data);
        }
    },[]);

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

export default Repositories_Details;