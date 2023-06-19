import Navbar from './components/Navbar'
import Textarea from './components/Textarea';

import { useState } from 'react';
import './App.css'

function App() {

  const [backgroundColor, setBackgroundColor] = useState('#111111');
  const [fontColor, setfontColor] = useState('#111111');
  
  const pull_data = (data1,data2) => {
   setBackgroundColor(data1)
   setfontColor(data2)
  }
  
  return (
  <main style={{backgroundColor: backgroundColor, color: fontColor}}>
     <Navbar func={pull_data}/>
     <Textarea color = {fontColor}/>
  </main>
 
   );
}

export default App;
