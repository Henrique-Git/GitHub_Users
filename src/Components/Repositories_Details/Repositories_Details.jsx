import React, {useContext ,useEffect, useState} from 'react';
import { DivData, DataItem, Title, DetailsBox } from './styles'
import { Context } from '../../Contexts/Context';

function Repositories_Details(){
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
        <DivData>
            <Title>DETALHES DO REPOSITÓRIO</Title>

            <DetailsBox>
                <DataItem>NOME: {details.name}</DataItem>
                <DataItem>DESCRIÇÃO: {details.description}</DataItem>
                <DataItem>ESTRELAS: {details.stargazers_count}</DataItem>
                <DataItem>LINGUAGENS UTILIZADAS: {details.language}</DataItem>
                <DataItem>LINK: <span onClick={() => window.location.replace(`https://github.com/${reposName}`)}>{details.url}</span></DataItem>
            </DetailsBox>
        </DivData>
    );
}

export default Repositories_Details;