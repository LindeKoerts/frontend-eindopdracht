import React, { useContext } from 'react';
import iconMapper from '../../helpers/iconMapper';
import './WeatherDetail.css';

function WeatherDetail({ description, temp, type }) {

    return (
        <section className="day-part">
      <span className="icon-wrapper">
        {iconMapper(type)}
      </span>
            <p className="description">{description}</p>
        </section>
    );
}

export default WeatherDetail;