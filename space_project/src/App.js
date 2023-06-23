
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from '../src/Components/Main_Header/Main_Header/Main_Header.js'
import Home from './Components/Home/Home'
import Crew from './Components/Crew/Crew'
import Technology from './Components/Technology/Technology'
import Destination from './Components/Destination/Destination'
import Error from './Components/Error/Error'

import Moon from './Components/Destination/Moon'
import Mars from './Components/Destination/Mars'
import Europa from './Components/Destination/Europa'
import Titan from'./Components/Destination/Titan'

function App() {
  
  return (
    
    <BrowserRouter>
     
    <Routes>
    <Route path = "/" element = {<MainHeader />}>
      <Route path="/" element={<Home />} />
      <Route path="Destination" element={<Destination />} />
     
      
      <Route path="Crew" element={<Crew />} />
      <Route path="Technology" element={<Technology />} />
    </Route>
    <Route path="Moon" element={<Moon/>} />
    <Route path="Mars" element={<Mars/>} />
    <Route path="Europa" element={<Europa/>} />
    <Route path="Titan" element={<Titan/>} />
    <Route path = "*" element ={<Error />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
