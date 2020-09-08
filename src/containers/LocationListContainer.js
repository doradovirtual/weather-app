import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
import { getWeatherCities } from './../reducer';
import { setSelectedCity, setWeather} from './../actions';

class LocationListContainer extends Component {

  

    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }
    

    handleSelectedLocation = city => {
        
             console.log(`handleweatherLocationClick ${city}`);    
             this.props.dispatchsetCity(city);
   
    }
    render(){
        return(
            <LocationList cities = {this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation} >
            </LocationList>
        );

    }

}

LocationListContainer.propTypes={
    dispatchsetCity:PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array
}

const mapDispatchToPropsActions = dispatch => ({
    dispatchsetCity: payload => dispatch(setSelectedCity(payload)),
    setWeather: cities => dispatch(setWeather(cities))
  
  });
  const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)});

  const Appconnected = connect(mapStateToProps,mapDispatchToPropsActions)(LocationListContainer);
  
export default Appconnected;

