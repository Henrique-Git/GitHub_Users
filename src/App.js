import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppDiv } from './AppStyles';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Repositories from './Components/Repositories/Repositories';
import Repositories_Details from './Components/Repositories_Details/Repositories_Details';
import {Context} from './Contexts/Context';
import './reset.css'

function App() {
  const [dados, setDados] = useState(null);
  const [repos, setRepos] = useState([]);
  const [reposName, setReposName] = useState(null);

  useEffect(() => {
    document.title = "GitHub User"
  }, []);
  
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
