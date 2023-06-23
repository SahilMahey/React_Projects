
import './App.css';
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
     
    <Routes>
    <Route path = "/" element = {<MainHeader />}>
      <Route path="/" element={<Home />} />
      <Route path="Destination" element={<Destination />}>
      <Route path="Moon" element={<ContentDest/>} />
      <Route path="Mars" element={<ContentDest/>} />
      <Route path="Europa" element={<ContentDest/>} />
      <Route path="Titan" element={<ContentDest/>} />
      </Route>
      <Route path="Crew" element={<Crew />} />
      <Route path="Technology" element={<Technology />} />
    </Route>
    
    
    <Route path = "*" element ={<Error />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
