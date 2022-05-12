import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AvatarImage, Body, Button, DataItem, DivData, Input, NoInformation, ReposButton, SubTitle, Title, UserData } from "./styles";
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

    async function searchUserEnter(e){
        if(e.keyCode === 13){
          const userSearched = await inputField;
  
          fetchAPI();
  
          async function fetchAPI() {
            const res = await fetch(
                // we'll update the KEYHERE soon!
                `https://api.github.com/users/`+ userSearched
            );
  
            const data = await res.json();
            setDados(data);
          }
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
            <UserData>
                <AvatarImage src={dados.avatar_url} alt='Avatar do Github' />
                <DivData>
                    <DataItem>LOGIN: {dados.login}</DataItem>
                    <DataItem>NOME: {dados.name}</DataItem>
                    <DataItem>CIDADE: {dados.location}</DataItem>
                    <DataItem>BIO: {dados.bio}</DataItem>
                    <DataItem>E-MAIL: {dados.email}</DataItem>
                    <DataItem>Nº SEGUIDORES: {dados.followers}</DataItem>
                    <DataItem>Nº SEGUINDO: {dados.following}</DataItem>
                
                    <Link to={`/userRepositories/${dados.login}`}>
                        <ReposButton>Repositórios</ReposButton>
                    </Link>
                </DivData>
            </UserData>
            )
        }
        else{
            return(
            <div>
                <NoInformation>SEM INFORMAÇÃO</NoInformation> 
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

            <Input type="text" onKeyDown={(e) => searchUserEnter(e)} onInput={(e) => setInput(e)} />
            
            <Button onClick={searchUser}>Buscar</Button>

            {showData()}
        </Body> 
    );
}

export default Home;