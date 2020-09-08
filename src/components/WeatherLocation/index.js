//Importar librerias
import React from 'react';
import Location from './Location';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherData from './WeatherData';
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';
import transformWeather from './../../services/transformWeather';


const WeatherLocation = ({onWeatherLocationClick, city, data}) =>(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city = {city}></Location> 
            {data ?
                 <WeatherData data={data}></WeatherData> :
                <CircularProgress size={60} thickness={7}/>
            }  
         </div>
  
)
 
WeatherLocation.propTypes={
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,  

}
//Exportarción para usar dentro de toda la apliacacion
export default WeatherLocation;


//componente funcional  ARROUND FUNCTION 
/*
const WeatherLocation = () =>(
    <div className="weatherLocationCont">
    <Location city = {"Cajicá"}></Location> 
    <WeatherData data={data}></WeatherData>
 </div>

);
*/