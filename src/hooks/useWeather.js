import { useEffect } from "react";
import { useState } from "react";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location:"",
        climet: "",
        temp: "",
        maxTemp: "",
        minTemp: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    })
    const [loading, setLoading] = useState({
        status: false,
        message: "Loading..."
    })
    const [error, setError] = useState(null);

    //Data Fetching fuction
    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                status: true,
                message: "Featching weather data....."
            })

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)

            if(!response.ok){
                const errorMessage = "Fetching weather data failed"
                throw new Error(errorMessage);
            } else {
                const data = await response.json();
                const updatedWeatherData = {
                    ...weatherData,
                    location: data?.name,
                    climate: data?.weather[0]?.main,
                    temp: data?.main?.temp,
                    maxTemp: data?.main?.temp_max,
                    minTemp: data?.main?.temp_min,
                    humidity: data?.main?.humidity,
                    cloudPercentage: data?.clouds?.all,
                    wind: data?.wind?.speed,
                    time: data?.dt,
                    longitude: longitude,
                    latitude: latitude,
                }
                setWeatherData(updatedWeatherData);
            }

            
        } catch (error) {
            setError(error) 
        } finally {
            setLoading({
                ...loading,
                status: false,
                message: ""
            })
        }
    }

    // initial run and get weather data for first time when load the application
    useEffect(() =>  {
        setLoading({
            ...loading,
            status: true,
            message: "Finding location....."
        })

        navigator.geolocation.getCurrentPosition( (position) => {
            const latitude = position.coords.latitude;
            const logitude = position.coords.longitude;
            fetchWeatherData(latitude, logitude);
        })
    }, [])

    return {
        weatherData,
        loading,
        error,
    }
}
export default useWeather;