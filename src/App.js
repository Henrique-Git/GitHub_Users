import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Repositories from './Components/Repositories/Repositories';
import {Context} from './Contexts/Context';
import './reset.css'

function App() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    document.title = "GitHub User"
  }, []);
  
  return (
    <section>
    <BrowserRouter>
        <Context.Provider value={{dados, setDados}}>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/userRepositories/:username' element={<Repositories />} />
        </Routes>
        </Context.Provider>
    </BrowserRouter>
    </section>
  );
}

export default App;
