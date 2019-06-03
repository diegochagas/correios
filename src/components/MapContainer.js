import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { API_KEY } from '../apis/GeocodingAPI';
import { connect } from 'react-redux';
import './MapContainer.scss';

class MapContainer extends React.Component {
    render() {
        const latitude = this.props.coordinates[0];
        const longitude = this.props.coordinates[1];
        return (
            <div className="map-container">
                <Map 
                    google={this.props.google} 
                    zoom={15} 
                    initialCenter={{ lat: latitude, lng: longitude }}
                >
                    <Marker onClick={this.onMarkerClick} name={'Current location'} />
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>Show Map</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

const GoogleWrapper = GoogleApiWrapper({
    apiKey: API_KEY
})(MapContainer);

const mapStateToProps = state => {
    return { coordinates: state.coordinates };
}

export default connect(mapStateToProps)(GoogleWrapper);



