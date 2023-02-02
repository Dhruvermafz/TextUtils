import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
 import{
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
              //whether dark mode is enabled
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) =>{
       setAlert({
        msg: message,
        type: type
       })
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode is enabled.", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(()=>{
        document.title = 'TextUtils is an amazing mode.';
      }, 2000);
      setInterval(()=>{
        document.title = 'Install TextUtils Now';
      }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled.", "success");
      document.title = 'TextUtils - Light Mode';
     
    }
  }
  return (
    <>
     <Router> 
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert}/>
       <div className="container my-3">
       
        
           {/* <Route path="/about">
            <About/>
          </Route>
          <Route path="/"> 
         <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />  
              </Route>  
               */}
        
        <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />
        
       
        </Routes> 
        </div>
      </Router>
   </>
  );
}
export default App;
