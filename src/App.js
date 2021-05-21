import React from "react";
import Header from './Header'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle, homeSty } from "./globalstles";


function App () {
  return (
      <Router>
        <GlobalStyle />
        <Navbar />
        <homeSty>
             <h1> Madam Doe's Pizza</h1>
          
        </homeSty>

        <Header/>
        
      </Router>
  );
};
export default App;
