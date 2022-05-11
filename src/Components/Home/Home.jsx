import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Body, Button, Input, SubTitle, Title } from "./styles";
import { Context } from '../../Contexts/Context'

function Home(){
    const {dados, setDados} = useContext(Context)
    const [inputField, setInputField] = useState(null);

    useEffect(() => {
        document.title = "GitHub Buscar Usuários"
     }, []);

    async function searchUser(){
        const userSearched = await inputField;
  
        fetchAPI();
    
            async function fetchAPI() {
                const res = await fetch(
                    `https://api.github.com/users/`+ userSearched
                );
  
                const data = await res.json();
                setDados(data);
            }        
    }

    function setInput(e){
        if(e.target.value !== null){
            setInputField(e.target.value);
        }
    }

    function showData(){
        if(inputField !== null && dados !== null){
            return( 
            <div>
                <img src={dados.avatar_url} alt='Avatar do Github' />
                <p>LOGIN: {dados.login}</p>
                <p>NOME: {dados.name}</p>
                <p>CIDADE: {dados.location}</p>
                <p>BIO: {dados.bio}</p>
                <p>E-MAIL: {dados.email}</p>
                <p>Nº SEGUIDORES: {dados.followers}</p>
                <p>Nº SEGUINDO: {dados.following}</p>
            
                <Link to={`/userRepositories/${dados.login}`}>
                    <button>Repositórios</button>
                </Link>     
            </div>
            )
        }
        else{
            return(
            <div>
                <p>SEM INFORMAÇÃO</p> 
            </div>
            )
        }
    }

    return(
        <Body>
            <Title>GitHub Users</Title>
            <SubTitle>
                Busque aqui o usuário desejado!!!
            </SubTitle>

            <Input type="text" onInput={(e) => setInput(e)} />
            
            <Button onClick={searchUser}>Buscar</Button>

            {showData()}
        </Body> 
    );
}

export default Home;