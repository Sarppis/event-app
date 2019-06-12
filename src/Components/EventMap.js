     import React, { Component } from 'react'
     import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


       const fetch = require('node-fetch')
       const mapStyles = {
        width: '100%',
        height: '50%',
       };
       class MapContainer extends Component {
        state = {
          events : [],
          loading: true

        }
        componentDidMount() {
          fetch('http://localhost:3030/')
          .then(res => res.json())
          .then((myData) => {
            this.setState({ events: myData.data, loading : false })
            console.log(this.state.events)
          })
          .catch(console.log)
        }
        displayMarkers = () => {
          return this.state.events.map((coor, index) => {
            return <Marker key={index} id={index} position={{
             lat: coor.location.lat,
             lng: coor.location.lon
           }}
           onClick={() => console.log("You clicked me!")} />
          })
        }
        render() {
            return (
              <div>
              <h1> Events in Helsinki </h1>
                <div>
               <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: 60.192059, lng: 24.945831}}
              >
                {this.displayMarkers()}
              </Map>
                  </div>
          </div>
            )
        }
       }

       export default GoogleApiWrapper({
         apiKey: (process.env.REACT_APP_GOOGLE_KEY)
       })(MapContainer)
