import SearchBar from "../searchbar/SearchBar";
import React, {useEffect, useState} from "react";
import axios from "axios";

const apiKey = 'e265816c2efb5c38bf3bc3fe7dfe63d9';

function Weather (){
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('');
    const [error, toggleError] = useState(false);


    useEffect(() => {
        async function fetchData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
                console.log(result.data);
                setWeatherData(result.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (location) {
            fetchData();
        }
    }, [location]);

    return (
        <section>
        <SearchBar setLocationHandler={setLocation}/>
    {error &&
    <span className="wrong-location-error">
              Oeps! Deze locatie bestaat niet
            </span>
    }

    <span className="location-details">
            {Object.keys(weatherData).length > 0 &&
            <>
                <h2>{weatherData.weather[0].description}</h2>
                <h3>{weatherData.name}</h3>
                <h1>{weatherData.main.temp}</h1>
            </>
            }
          </span>

        </section>


)
}

export default Weather;