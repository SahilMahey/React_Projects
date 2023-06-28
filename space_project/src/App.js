
import './App.css';
import React, {useNavigate, useLocation, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from '../src/Components/Main_Header/Main_Header/Main_Header.js'
import Home from './Components/Home/Home'
import Crew from './Components/Crew/Crew'
import Technology from './Components/Technology/Technology'
import Destination from './Components/Destination/Destination'
import Error from './Components/Error/Error'
import ContentDest from './Components/Destination/Content_dest';

function App() {
  
  return (
    
    <BrowserRouter>
     <MainHeader />
    <Routes>
      <Route  path ="/" element={ <Home/>}/>
      <Route path="Destination" element={<Destination />} >
        <Route index />
        <Route path= "Mars"/>
        <Route path= "Europa" />
        <Route path= "Titan" />
        </Route>
      <Route path="Crew" element={<Crew />} />
      <Route path="Technology" element={<Technology />} />
    
    <Route path = "*" element ={<Error />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;