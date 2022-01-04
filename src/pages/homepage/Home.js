import React from "react";
import './Home.css';

function Homepage(){

    return(
        <section className= "white">

        <h2> De weerapp die jij</h2>
            <h3> nodig hebt zodat jij het</h3>
            <h2> NEDERLANDSE WEER</h2>
            <h3>kunt trotseren!!!</h3>

            <p>Ja, je leest het goed! Nooit meer overhit, nat geregend of rood van de hagel op locatie aankomen. <h3>#WhatToWear.</h3> helpt jou overleven in Nederland. </p>

            <button className="roze"> Aanmelden</button>
            <button className="roze"> Meer Informatie</button>

            <img className="resize1" src="![](../../assets/Homepage_photo.png)" alt="afbeelding homepage"/>

        </section>
    );
}

export default Homepage;
