import Navbar from './components/Navbar'
import Textarea from './components/Textarea';

import { useState } from 'react';
import './App.css'

function App() {

  const [backgroundColor, setBackgroundColor] = useState('');
  const [fontColor, setfontColor] = useState('');
  
 function pull_backgroundC(event)
 {
   setBackgroundColor(event.target.value)
 }

 function pull_fontC(event){
   setfontColor(event.target.value);
 }
  return (
  <main style={{backgroundColor: backgroundColor, color: fontColor}}>
     <Navbar func1={pull_backgroundC} func2 = {pull_fontC}/>
     <Textarea color = {fontColor}/>
  </main>
 
   );
}

export default App;
