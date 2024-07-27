import logo from './logo.svg';
import './App.css';
import {action, originals} from  './Urls'
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">

     <Navbar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url = {action} title='Action' isSmall/>
      
    </div>
  );
}

export default App;
