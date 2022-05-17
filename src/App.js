import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./Contexts/Context";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Repositories from "./Components/Pages/Repositories/Repositories";
import Repositories_Details from "./Components/Pages/Repositories_Details/RepositoriesDetails";
import "./reset.css"
import { AppDiv } from "./AppStyles";

function App() {
  //Declaração das constantes a serem utilizadas em Context pelos demais componentes
  const [dados, setDados] = useState(null);
  const [repos, setRepos] = useState([]);
  const [reposName, setReposName] = useState(null);
  
  return (
    <AppDiv>
      <BrowserRouter>
          <Context.Provider value={{dados, setDados, repos, setRepos, reposName, setReposName}}>
            <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/userRepositories/:username' element={<Repositories />} />
              <Route path='/userRepositories/:username/:repository' element={<Repositories_Details />} />
            </Routes>
            <Footer />
          </Context.Provider>
      </BrowserRouter>
    </AppDiv>
  );
}

export default App;
