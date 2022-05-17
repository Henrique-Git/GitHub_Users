import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Context } from "../../../Contexts/Context";
import { AvatarImage, Button, DataItem, DivData, HomeDiv, Input, NoInformation, ReposButton, Title, UserData } from "./Styles";

function Home(){
    //Declaração das constantes a serem utilizadas no componente Home
    const {dados, setDados} = useContext(Context)
    const [inputField, setInputField] = useState(null);
    
    //Mudança do título apresentado na aba da página
    useEffect(() => {
        document.title = "GitHub Users"

        setDados(null);
     },[]);

    //Função assíncrona responsável pela busca dos usuários consultando a API do GitHub 
    async function searchUser(){
        const userSearched = await inputField;

        if(userSearched === ''){
            setDados(null);    
        }

        fetchAPI();
    
            async function fetchAPI() {
                if(userSearched !== null && userSearched !== ''){
                    const res = await fetch(
                        `https://api.github.com/users/`+ userSearched
                    );
    
                    const data = await res.json();
                    setDados(data);
                }
            }
    }

    //Função assíncrona responável pela busca dos usuário ao ser apertada a tecla ENTER
    async function searchUserEnter(e){
        if(e.keyCode === 13){
          const userSearched = await inputField;

          if(userSearched === ''){
            setDados(null);    
          }

          fetchAPI();
  
          async function fetchAPI() {
            if(userSearched !== null && userSearched !== ''){
                const res = await fetch(
                    `https://api.github.com/users/`+ userSearched
                );

                const data = await res.json();
                setDados(data);
            }
          }
        }
    }

    //Função responsável por armazenar o valor do input na constante inputField
    function setInput(e){
        if(e.target.value !== null){
            setInputField(e.target.value);
        }
    }

    //Função responsável pela apresentação dos resultados da requisição na tela
    function showData(){
        if(inputField !== null && (dados !== null && dados !== '')){
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
        <HomeDiv>
            <Title><FaGithub /> GitHub Users</Title>

            <Input placeholder="Digite aqui um usuário" type="text" onKeyDown={(e) => searchUserEnter(e)} onInput={(e) => setInput(e)} />
        
            <Button onClick={searchUser}>Buscar</Button>

            {showData()}
        </HomeDiv> 
    );
}

export default Home;