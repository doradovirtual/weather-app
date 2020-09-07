import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'


const data = {
    temperature:10,
    humidity:10,
    weatherstate: 'normal',
    wind:'normal'

}


const ForecastItem = ({ weekDay, hour, data }) =>(
    <div>
        <div><h2>{weekDay} Hora : {hour} hs</h2></div>
        <WeatherData data = {data}/>
    </div>
);

ForecastItem.propTypes ={
    //weekday: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;