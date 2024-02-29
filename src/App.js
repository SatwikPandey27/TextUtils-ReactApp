// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom"
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); //check whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2500);
  }

  const lightMode = ()=>{
      setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("Light mode has been enabled!", "success")
    }
  const neonDarkMode = ()=>{
      setMode('neon dark mode');
      document.body.style.backgroundColor='black'
      document.body.style.color='#00ff00'
      showAlert("Neon Dark Mode has been enabled!.", "success");
    }
    const darkMode = ()=>{
      setMode('dark');
      document.body.style.backgroundColor='#2f2f2f'
      document.body.style.color='white'
      showAlert("Dark mode has been enabled!", "success")
    }

  return (
    <div>
    <Router>
      <Navbar title="TextUtils" mode={mode} lightMode={lightMode} darkMode={darkMode} neonDarkMode={neonDarkMode}/>
      <Alert alert={alert} setAlert={setAlert}/>
      <div className='container'>
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          {/* <About/> */}
          <Route path="/" element={<TextForm heading="Enter your text below for analysis:" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
