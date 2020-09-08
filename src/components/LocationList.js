import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './Style.css';

/**Cualquier componente debe tener una key si o si */
const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);

    };

    const strToComponentes = cities =>(
        cities.map( city => 
            (
                <WeatherLocation 
                    key ={city.key} 
                    city ={city.name}
                    onWeatherLocationClick = {() => handleWeatherLocationClick(city.name)}
                    data={city.data}
                />))
    );
    return(  
      <div className="locationList">
        {strToComponentes(cities)}
      </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,

}

export default LocationList;