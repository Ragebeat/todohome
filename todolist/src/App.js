import React, { useContext, useEffect } from 'react';
import './App.css';
import { appContext } from './context/appContext';
import Loader from './components/Loader/Loader'
import Content from './components/Content/Content';

function App() {
  const {loading} = useContext(appContext)
  return (
    <div className="App">  
    <h1>From pc</h1>   
    {loading ? <Loader/>:
    <Content/>
          
        }        
    </div>
          )
}

export default App;
