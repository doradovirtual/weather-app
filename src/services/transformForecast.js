
import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';


const transformForecast = data => {
   return (data.list.filter(item => (
            moment.unix(item.dt).utc().hours() === 6 ||
            moment.unix(item.dt).utc().hours() === 12 ||
            moment.unix(item.dt).utc().hours() === 18
            
            )).map(item =>(
            {
                weekDay: moment.unix(item.dt).format('ddd'),
                hour: moment.unix(item.dt).hour(),
                data: transformWeather(item)
            }
        ))) 
    };
/**
 *  moment.unix(item.dt).hour() === 6 ||
    moment.unix(item.dt).hour() === 12 ||
    moment.unix(item.dt).hour() === 18
 * 
 */
/**
 * UTc() para compatibilidad de uso horario, sin esto no sirve el filtro.
 * 
 */
export default transformForecast;