import React from 'react';
import PropTypes from 'prop-types';
import ForcastItem from './ForcastItem';
import './Style.css';


const renderProgress= () => {
    return <h3 >"Cargando Pronostico extendido..."</h3>;
}

const renderForecastItemDays= (forecastData) =>{ 
return forecastData.map( forecast => (
        <ForcastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay = {forecast.weekDay} 
            hour = {forecast.hour} 
            data={forecast.data}>

        </ForcastItem>));
}


const ForecastExtended =({ city , forecastData })=>(
        //Destructuring para hacer refernecia a un atributo de props
                <div >
                    <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
                    {forecastData ?
                        <div className = "ForcastItemCont">{renderForecastItemDays(forecastData)}
                        </div> :
                        <div className = "ForcastItemCont">{renderProgress()}
                        </div>
                    }
                    
                </div>
                
)

    

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended;

/**
 * <div className = "CircularProgressCont"><CircularProgress/></div>
 * 
 */