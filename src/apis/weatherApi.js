import axios from "axios";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city){
    try{
        const response = await axios.get(BASE_URL,{
            params:{
                q:city,
                appid:API_KEY,
                units:'metric'
            }
        });
        console.log(response.data);
        return {
            
            temperature:response.data.main.temp,
            condition:response.data.weather[0].description,
            icon:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
        }
    }catch(error){
        console.error("Weather API Error:", error);
        return null;  
    }
}