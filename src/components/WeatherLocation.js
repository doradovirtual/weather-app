//Importar librerias
import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

//componente funcional  ARROUND FUNCTION 
const WeatherLocation = () => (
    <div>
       <Location city = {"Rio de janeiro"}></Location> 
       <WeatherData></WeatherData>
    </div>
);

//Exportarción para usar dentro de toda la apliacacion
export default WeatherLocation;
