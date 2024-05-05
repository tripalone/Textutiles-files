
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import React,{useState} from 'react';

function App() {
  const [Mode, setMode]=useState('light');

  const toggleMode= () =>{
    if(Mode === 'light'){
    setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
    <Navbar title="Textutiles" aboutText="About Textutiles" mode={Mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <TextForms heading="Enter Text Here To Analyze"/>
    <About/>
    </div>
    </>
  );
}

export default App;
