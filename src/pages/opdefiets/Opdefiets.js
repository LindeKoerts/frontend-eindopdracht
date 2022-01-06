import React, {useState, useEffect} from "react";
import axios from 'axios';
import './Opdefiets.css';
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/pageheader/PageHeader";
import WeatherDetail from '../../components/weatherDetail/WeatherDetail';
import createTimeString from '../../helpers/createTimeString';
import bike from "./bike.png";
import staaf from "./route.png";
import Weather from "../../components/weather/Weather";

const apiKey = 'e265816c2efb5c38bf3bc3fe7dfe63d9';

function OpDeFiets({ coordinates }){
    const [forecasts, setForecasts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,current,daily&appid=${apiKey}`);
                setForecasts([
                    result.data.hourly[3],
                    result.data.hourly[5],
                    result.data.hourly[7],
                ]);
                console.log(result.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }

            toggleLoading(false);
        }

        if (coordinates) {
            fetchData();
        }

    }, [coordinates]);


    return (

    <section>

        <article className= "whitebike">
        <PageHeader/>

            <img className="fiets" src={bike} alt="grote foto met fiets"/>

            <h2>Op de</h2>
            <img className="route" src={staaf} alt="uitgestippelde route"/>
                <h2>fiets</h2>


        </article>

        <div className= "space">

        </div>

        <article className="column3">

            <div className="citys">

                <aside className="city1">
                    <p> hier komt de eerste stad te staan.</p>
                    <Weather/>
                    <WeatherDetail/>

                </aside>

                <aside className="city2">
                    <p> hier komt de tweede stad te staan.</p>

                    <Weather/>


                </aside>

            </div>



        </article>

        <div className="space2">

        </div>

        <article>


        <Footer/>

        </article>



    </section>

    );
}

export default OpDeFiets;
