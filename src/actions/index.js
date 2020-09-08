import transformForecast from './../services/transformForecast';
import transformWeather  from './../services/transformWeather';


//action
export const SET_CITY = 'SET_CITY' ;
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';


const setCity = payload => ({ type: SET_CITY, payload })
const setForecastData  = payload =>({type: SET_FORECAST_DATA, payload});
const getWeatherCity = payload =>({type:GET_WEATHER_CITY, payload });
const setWeatherCity = payload =>({type:SET_WEATHER_CITY, payload });

const api_key = "1b0c5e407820b85f9739312d8a1b4583";
const url = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/forecast";

export const  setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
        //CONSULTA PROMISE
        dispatch(setCity(payload));
       
        return fetch(url_forecast).then(
            data => (data.json())
        ).then( weather_data =>{    
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                dispatch(setForecastData({city: payload, forecastData}))
            })
        }
}

export const setWeather = payload =>{
    
    return dispatch => {
        payload.forEach( city => {
            dispatch(getWeatherCity(city));
            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
            console.log("llegue aqui");
            fetch(api_weather).then(data =>{
                return data.json();
            }).then(weather_data => {
                debugger;
                console.log(weather_data)
                const clima = transformWeather(weather_data);
                
               // dispatch(setWeatherCity({city, weather}));
            });
               
        });
    }
};