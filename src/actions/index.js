import transformForecast from './../services/transformForecast'

//action
export const SET_CITY = 'SET_CITY' ;
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload })
const setForecastData  = payload =>({type: SET_FORECAST_DATA, payload});

const api_key = "1b0c5e407820b85f9739312d8a1b4583";
const url = "http://api.openweathermap.org/data/2.5/forecast";


export const  setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
        //CONSULTA PROMISE
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data =>{    
                //console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                dispatch(setForecastData({city: payload, forecastData}))
            })
        }
}