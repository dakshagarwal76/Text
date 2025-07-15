import './App.css';
import Alert from './components/Alert';
import DarkMode from './components/Dakmode';
import Navbar from './components/Navbar';
import Textbar from './components/Textbar';

import React,{useState} from 'react';

function App() {

const [mode, setMode] = useState("light");
const [alert,SetAlert] = useState(null);

const showalert= (message,type)=>{
  SetAlert({msg:message,
  type:type})
};

setTimeout(() => {
  SetAlert(null);
}, 3000);


const changemode=()=>{
      if(mode==="light"){
        setMode("dark")
        document.body.style.backgroundColor="#212529"
        showalert("changed to dark mode","success")
      }
      if(mode==="dark"){
        setMode("light")
        document.body.style.backgroundColor="white"
        showalert("changed to light mode","success")
  }
}

return (
  <>
  <div className={`Full bg-${mode}`} >
<Navbar title="Navbar" mode={mode} togglemode={changemode} />
<Alert alert={alert} />
<div className="container">
<Textbar heading={`Enter the text`} mode={mode} showalert={showalert} />
</div>
</div>
</>
  );
}

export default App;
