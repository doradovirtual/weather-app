import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForcastItem from './ForcastItem';
import './Style.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformForecast from './../services/transformForecast';


/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

const data = {
    temperature:10,
    humidity:10,
    weatherstate: 'normal',
    wind:'normal'

}
*/
const api_key = "1b0c5e407820b85f9739312d8a1b4583";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{
    
    constructor(){
        super();
        this.state ={
            forecastData: null
            
        }
    }

    componentDidMount(){
       this.updateCity(this.props.city);
       
    }
    /**
     * no se ejecutará una vez se monte el componente,
     * si no que se esperará a recibir nuevas props de
     *  un componente padre para ejecutarse.
     * Actualización / Updating 
     */
    componentWillReceiveProps(nextprops){
       
        if(nextprops.city !== this.props.city){
            this.setState({forecast: null});
            this.updateCity(nextprops.city);
       
        }

    }
    updateCity = city =>{
        /**
         * Aquí encontramos un TempleteString
         */
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;
        //CONSULTA PROMISE
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data =>{    
                //console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                debugger;
                this.setState({
                    forecastData
                })
            }
        )

    }

     renderProgress= () => {
        return "Cargando Pronostico extendido...";
    }

    renderForecastItemDays(forecastData){ 
    return forecastData.map( forecast => (
            <ForcastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay = {forecast.weekDay} 
                hour = {forecast.hour} 
                data={forecast.data}>
 
            </ForcastItem>));
    }
  
    render(){
        //Destructuring para hacer refernecia a un atributo de props
        const { city } = this.props;
        const {forecastData} = this.state;
        return (
                <div >
                    <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
                    {forecastData ?
                        <div className = "ForcastItemCont">{this.renderForecastItemDays(forecastData)}
                        </div> :
                        <div className = "ForcastItemCont">{this.renderProgress()}
                        </div>
                    }
                    
                </div>);
    }

}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;

/**
 * <div className = "CircularProgressCont"><CircularProgress/></div>
 * 
 */