import React, { useState } from 'react'
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [text, setText] = useState('Enable dark Mode')
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [btnColor, setBtnColor] = useState('primary')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  function toggleMode(color ){
    // console.log("toggle")
    console.log("color", color)
    console.log("mode", mode)
    if(color === 'dark'){
      setText('Enable Dark Mode')
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "Success")
    }else if(color ==='red'){
      setMode('dark')
      setBtnColor('danger')
      document.body.style.backgroundColor = 'rgb(123 7 12)'
      setText('Back To Normal Mode')
    } else if(color === "orange"){
      setMode('dark')
      setBtnColor('warning')
      document.body.style.backgroundColor = '#b27b18'
      setText('Back To Normal Mode')
    }
     else if(color === "green"){
      setMode('dark')
      setBtnColor('success')
      document.body.style.backgroundColor = '#18b25d'
      setText('Back To Normal Mode')
    }
    else{
      setMode('dark')
      setText('Disable Dark Mode')
      document.body.style.backgroundColor = '#13214d'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "Success")
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title='TextPads' mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert} BtnColor={btnColor} />
          {/* </Route>
        </Switch> */}
      
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
