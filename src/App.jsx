import { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';
import WeatherApp from './weatherApp.jsx';


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <div className="mainn">
        <WeatherApp></WeatherApp>
    </div>
    
    </>
  )
}

export default App;
