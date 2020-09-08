
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import { Grid, Col, Row } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';
import  ForecastExtendedContainer from './containers/ForecastExtendedContainer';


const cities =[
    "Buenos Aires,ar",
    "Washington,us",
    "Bogota,col",
    "Ciudad de México,mx"
];

class App extends Component {

  

  render(){
    
    return (
      <Grid>
        <Row >
          <AppBar position='sticky'>
            <Toolbar style={{ background: 'black' }}>
              <Typography variant ='title' color='black'>
                  Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row  className="GridCont" >
          <Col ls={6} xs={12} md={6} >
             <LocationListContainer cities = {cities} > </LocationListContainer>
          </Col>
          <Col ls={6} xs={12} md={6}>
            <Paper>
            <div className="details">
                  <ForecastExtendedContainer/> 
            </div>
            </Paper>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;