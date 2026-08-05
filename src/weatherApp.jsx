import { useState } from "react";
import { Button } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

import TextField from "@mui/material/TextField";

import Card from "./Card.jsx";
export default function WeatherApp(){
    let [city ,setCity] = useState("");

    let [data, setData] = useState({temp_min : "", temp_max:"" , humidity:""});


    const apiKey = import.meta.env.VITE_WEATHER_API;

    let handleChangeCity = (event) =>{
          setCity(event.target.value);  
    }

    let handleSubmit = async(event) =>{
       try{
         
        let response  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        let WeatherData  = await response.json();
        setData({temp_min : WeatherData.main.temp_min, temp_max:WeatherData.main.temp_max , humidity:WeatherData.main.humidity});
        
       }
       catch(err){
            console.log("error = " ,err);
                        
       }
    }
    return (
        
        <>
        
            <h1>Weather App</h1>
            <br></br>

            <form action="" onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }} >
            <TextField
            label="Enter City"
            variant="outlined"
            id = "city"
            value = {city}
            name = "city"
            onChange={handleChangeCity}
            sx={{ width: 300 }

        }
            ></TextField>
        <br>
        </br>
        <br />
        <Button type = "submit"  variant="contained" endIcon={<SendIcon />}>
            Search
        </Button>

        </form>
        
{
  data.temp_min ? (
    <Card
      temp_min={data.temp_min}
      temp_max={data.temp_max}
      humidity={data.humidity}
    />
  ) : <><br /> <p style={{color:"red"}}>Please enter a valid city</p></>
}
        </>
    );
};