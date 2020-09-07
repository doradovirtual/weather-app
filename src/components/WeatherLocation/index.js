//Importar librerias
import React, {Component} from 'react';
import Location from './Location';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherData from './WeatherData';
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';
import transformWeather from './../../services/transformWeather';





//class component 
class WeatherLocation extends Component {

    //constructor donde se empieza el inicip de la clase
    constructor(props){
        super(props);
        const {city} = props;
        
        this.state={
            city,
            data: null,
        };
        console.log("constructor");

      
    }

    componentDidMount() {
        console.log(" componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(" componentDidUpdate");
    }
    
    handleUpdateClick =() =>{
            //Consultar API
    
            const api_weather = getUrlWeatherByCity(this.state.city);
            
            fetch(api_weather).then(resolve =>{
                console.log(resolve);
                return resolve.json();
            
            }).then(data =>{
                console.log("Resultado del handleUpdateClick")
                const newWeather= transformWeather(data);
                console.log(newWeather);
                //debugger;
                this.setState({
                    data: newWeather
                }); 
        });
}  

render(){
    console.log("RENDER");
    const {onWeatherLocationClick} = this.props;
    const {city , data } = this.state;
    
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
            <Location city = {city}></Location> 
            {data ?
                 <WeatherData data={data}></WeatherData> :
                <CircularProgress/>
            }  
         </div>
        )
    };
}
 

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