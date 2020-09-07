import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';
import { setSelectedCity } from './../actions';

class LocationListContainer extends Component {
    handleSelectedLocation = city => {
        
             console.log(`handleweatherLocationClick ${city}`);    
             this.props.dispatchsetCity(city);
   
    }
    render(){
        return(
            <LocationList cities = {this.props.cities}
                onSelectedLocation={this.handleSelectedLocation} >
            </LocationList>
        );

    }

}

LocationListContainer.propTypes={
    dispatchsetCity:PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
    dispatchsetCity: payload => dispatch(setSelectedCity(payload))
  
  });
  
  const Appconnected = connect(null,mapDispatchToPropsActions)(LocationListContainer);
  
export default Appconnected;

