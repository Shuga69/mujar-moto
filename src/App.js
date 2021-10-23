import './App.css';
import Header from "./components/Header/Header";
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
        <Router>
            <Header/>
     <MainPage/>
        </Router>
    </div>
  );
}

export default App;
